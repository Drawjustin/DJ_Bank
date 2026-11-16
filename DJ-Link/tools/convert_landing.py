"""Figma design-context(React+Tailwind) 코드 → Tailwind 없이 inline style React 코드로 변환 (01 랜딩용)."""
import re, json, sys

SRC = '/home/claude/figma/01_part0.txt'
OUT = '/home/claude/DJ-Link/frontend/src/screens/LandingFigma.tsx'

def val(v):
    v = v.replace('_', ' ')
    if re.fullmatch(r'-?\d+(\.\d+)?', v):
        return v + 'px' if v != '0' else '0'
    return v

WEIGHT = {'font-light': 300, 'font-normal': 400, 'font-medium': 500, 'font-bold': 700, 'font-black': 900}

def tw(cls):
    s = {}
    grad = {}
    transforms = []
    border = False
    for k in cls.split():
        m = re.fullmatch(r'(-?)([a-z-]+)-\[(.+)\]', k)
        if k in ('absolute', 'relative'): s['position'] = k
        elif k == 'shrink-0': s['flexShrink'] = 0
        elif k == 'flex-none': s['flex'] = 'none'
        elif k == 'flex': s['display'] = 'flex'
        elif k == 'flex-col': s['flexDirection'] = 'column'
        elif k == 'flex-wrap': s['flexWrap'] = 'wrap'
        elif k == 'items-center': s['alignItems'] = 'center'
        elif k == 'items-start': s['alignItems'] = 'flex-start'
        elif k == 'justify-center': s['justifyContent'] = 'center'
        elif k in ('content-stretch', 'content-start'): pass
        elif k == 'block': s['display'] = 'block'
        elif k == 'max-w-none': s['maxWidth'] = 'none'
        elif k == 'inset-0': s.update(top=0, right=0, bottom=0, left=0)
        elif k == 'left-0': s['left'] = 0
        elif k == 'top-0': s['top'] = 0
        elif k == 'size-full': s.update(width='100%', height='100%')
        elif k == 'h-px': s['height'] = '1px'
        elif k == 'py-px': s.update(paddingTop='1px', paddingBottom='1px')
        elif k == 'mb-0': s['marginBottom'] = 0
        elif k == 'overflow-clip': s['overflow'] = 'hidden'
        elif k == 'whitespace-nowrap': s['whiteSpace'] = 'nowrap'
        elif k == 'whitespace-pre': s['whiteSpace'] = 'pre'
        elif k == 'text-center': s['textAlign'] = 'center'
        elif k == 'text-white': s['color'] = '#fff'
        elif k == 'bg-white': s['backgroundColor'] = '#fff'
        elif k in WEIGHT: s['fontWeight'] = WEIGHT[k]
        elif k == 'border': border = True; s['borderWidth'] = '1px'
        elif k == 'border-3': border = True; s['borderWidth'] = '3px'
        elif k == 'border-b': border = True; s.update(borderWidth=0, borderBottomWidth='1px')
        elif k == 'border-solid': s['borderStyle'] = 'solid'
        elif k == 'border-white': s['borderColor'] = '#fff'
        elif k == 'opacity-40': s['opacity'] = 0.4
        elif k == 'bg-gradient-to-r': grad['dir'] = '90deg'
        elif k == 'bg-gradient-to-b': grad['dir'] = '180deg'
        elif k == 'via-1/2': grad['viaPos'] = ' 50%'
        elif k == 'bg-clip-text': s.update(WebkitBackgroundClip='text', backgroundClip='text')
        elif k == 'underline': s['textDecoration'] = 'underline'
        elif k.startswith('decoration-'): pass
        elif k == '-translate-x-1/2': transforms.append('translateX(-50%)')
        elif re.fullmatch(r'-?rotate-\d+', k): transforms.append(f"rotate({'-' if k.startswith('-') else ''}{k.split('-')[-1]}deg)")
        elif k.startswith('[') and k.endswith(']'):
            p, v = k[1:-1].split(':', 1)
            s[re.sub(r'-(\w)', lambda mm: mm.group(1).upper(), p)] = v
        elif k.startswith('font-['): pass
        elif m:
            neg, key, v = m.groups()
            v = val(v)
            if neg: v = '-' + v
            if key == 'left': s['left'] = v
            elif key == 'top': s['top'] = v
            elif key == 'right': s['right'] = v
            elif key == 'bottom': s['bottom'] = v
            elif key == 'w': s['width'] = v
            elif key == 'h': s['height'] = v
            elif key == 'size': s.update(width=v, height=v)
            elif key == 'min-w': s['minWidth'] = v
            elif key == 'gap': s['gap'] = v
            elif key == 'gap-y': s['rowGap'] = v
            elif key == 'gap-x': s['columnGap'] = v
            elif key == 'rounded': s['borderRadius'] = v
            elif key == 'leading': s['lineHeight'] = v
            elif key == 'tracking': s['letterSpacing'] = v
            elif key == 'p': s['padding'] = v
            elif key == 'px': s.update(paddingLeft=v, paddingRight=v)
            elif key == 'py': s.update(paddingTop=v, paddingBottom=v)
            elif key in ('pl', 'pr', 'pt', 'pb'): s[{'pl': 'paddingLeft', 'pr': 'paddingRight', 'pt': 'paddingTop', 'pb': 'paddingBottom'}[key]] = v
            elif key == 'shadow': s['boxShadow'] = v
            elif key == 'opacity': s['opacity'] = v
            elif key == 'flex': s['flex'] = v
            elif key == 'from': grad['from'] = v
            elif key == 'via': grad['via'] = v
            elif key == 'to': grad['to'] = v
            elif key == 'bg': s['backgroundColor'] = v
            elif key == 'text':
                if v.endswith('px'): s['fontSize'] = v
                else: s['color'] = v
            elif key == 'border':
                border = True
                if v.endswith('px'): s['borderWidth'] = v
                else: s['borderColor'] = v
            else: raise ValueError('unknown ' + k)
        elif k == 'min-w-px': s['minWidth'] = '1px'
        else: raise ValueError('unknown token ' + k)
    if border: s.setdefault('borderStyle', 'solid')
    if grad:
        stops = [grad.get('from')] + ([grad['via'] + grad.get('viaPos', '')] if 'via' in grad else []) + [grad.get('to')]
        s['backgroundImage'] = f"linear-gradient({grad.get('dir', '180deg')}, {', '.join(x for x in stops if x)})"
    if transforms: s['transform'] = ' '.join(transforms)
    return s

def to_js(s):
    return '{' + ', '.join(f'{k}: {json.dumps(v, ensure_ascii=False)}' for k, v in s.items()) + '}'

t = open(SRC).read()
lines = t.split('\n')
# S8(3369:162) 섹션 시작 줄 이전까지 사용 (디자인 컨텍스트가 S8 중간에서 잘림) → S8·S9는 Landing.tsx에서 별도 구현
cut = next(i for i, l in enumerate(lines) if 'data-node-id="3369:162"' in l)
body = '\n'.join(lines[:cut]) + '\n      {children}\n    </div>\n  );\n}\n'

# 에셋 상수 → 로컬 파일 import
ASSET = {
    'imgDot': 'l-dot-blue', 'imgMascot': 'mascot-float', 'imgE': 'logo-e-white', 'imgO': 'logo-o',
    'imgIconChevDown': 'l-chev-down-white-34', 'imgIconDownload': 'l-download', 'imgIconPhone': 'l-phone-white',
    'imgPagerDots': 'l-pager-dots', 'imgIconChat': 'l-chat-36', 'imgIconBrief': 'l-brief-36', 'imgIconLink': 'l-link-36',
    'imgIconZap': 'l-zap-36', 'imgIconShieldc': 'l-shield-36', 'imgIconPhone1': 'l-phone-36', 'imgIconArrow': 'l-arrow-222',
    'imgTri': 'l-tri', 'imgIconArrow1': 'l-arrow-blue', 'imgIconChevLeft': 'l-chev-left-24', 'imgIconChevRight': 'l-chev-right-24',
    'imgIconChevLeft1': 'l-chev-left-20', 'imgIconChevRight1': 'l-chev-right-20', 'imgIconChat1': 'l-chat-30',
    'imgIconPlus': 'l-plus-blue', 'imgIconCalc': 'l-calc-30', 'imgIconPlus1': 'l-plus-red', 'imgIconGrid': 'l-grid-30',
    'imgIconPlus2': 'l-plus-teal', 'imgIconCheck': 'l-check-blue', 'imgIconCheck1': 'l-check-teal', 'imgLogo': 'l-logo-gplay',
    'imgLogo1': 'l-logo-apple', 'imgDot1': 'l-dot-purple', 'imgDot2': 'l-dot-teal', 'imgDot3': 'l-dot-amber',
    'imgFlagKr': 'flag-kr', 'imgIconChevDown1': 'chev-down-666',
}
imports = []
def rep_const(m):
    name = m.group(1)
    used = re.search(r'\{' + name + r'\}', body[m.end():]) is not None
    if not used: return ''
    imports.append(f"import {name} from '../assets/svg/{ASSET[name]}.svg';")
    return ''
body = re.sub(r'const (img\w*) = "[^"]+";\n', rep_const, body)

# 헬퍼 컴포넌트: className 프롭 → style 프롭
body = body.replace('className?: string;', 'style?: React.CSSProperties;').replace('{ className?: string }', '{ style?: React.CSSProperties }')
body = re.sub(r'\(\{ className(,|\s*\})', r'({ style\1', body)
body = re.sub(r'className=\{className \|\| "([^"]*)"\}', lambda m: f'style={{style || {to_js(tw(m.group(1)))}}}', body)
# 일반 className
body = re.sub(r'className="([^"]*)"', lambda m: f'style={{{to_js(tw(m.group(1)))}}}', body)
body = body.replace('export default function Component01() {', 'export default function LandingFigma({ children, onLogin }: { children?: React.ReactNode; onLogin: () => void }) {')
# GNB 회원가입/로그인 버튼 → 로그인 화면으로
for nid in ('3359:19', '3359:21'):
    body = body.replace(f'data-node-id="{nid}"', f'data-node-id="{nid}" onClick={{onLogin}} role="button"', 1)

# 원본에 style이 따로 있던 요소: 변환된 style과 합치기
body = re.sub(r'style=\{\{([^{}]*)\}\}([^<>]*?) style=\{\{ ?([^{}]*?) ?\}\}', lambda m: 'style={{' + m.group(1) + ', ' + m.group(3) + '}}' + m.group(2), body)
header = "// 자동 생성 파일: figma/convert_landing.py 가 Figma 01 랜딩(3359:2) 디자인 코드를 변환해 만든 것. 직접 고치지 말 것.\nimport React from 'react';\n" + '\n'.join(imports) + '\n'
open(OUT, 'w').write(header + body)
print('ok', len(imports), 'assets, cut at line', cut)
