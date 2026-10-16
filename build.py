"""Build an offline single-file HTML, optionally embedding official brand fonts."""
from pathlib import Path
import argparse,json,base64
ROOT=Path(__file__).resolve().parent
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--heading-font',type=Path)
p.add_argument('--body-font',type=Path)
p.add_argument('--body-bold-font',type=Path)
p.add_argument('--output',type=Path,default=ROOT/'index.html')
a=p.parse_args()
assets={k:'data:image/png;base64,'+base64.b64encode((ROOT/'assets'/n).read_bytes()).decode() for k,n in [('logoColor','logo-color.png'),('logoWhite','logo-white.png'),('building','building.png')]}
css=(ROOT/'styles.css').read_text()
for font,family,weight in [(a.heading_font,'UTM Hanzel','100 900'),(a.body_font,'SVN Gotham','400'),(a.body_bold_font,'SVN Gotham','700')]:
 if font:
  mime={'.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.otf':'font/otf'}.get(font.suffix.lower())
  if not mime:raise SystemExit('Expected WOFF2, WOFF, TTF or OTF font')
  css+="\n@font-face{font-family:'%s';src:url(data:%s;base64,%s);font-weight:%s;font-display:swap}"%(family,mime,base64.b64encode(font.read_bytes()).decode(),weight)
data=json.loads((ROOT/'content.json').read_text())
s=(ROOT/'shell.html').read_text().replace('__CSS__',css).replace('__DATA__',json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')).replace('__ASSETS__',json.dumps(assets)).replace('__JS__',(ROOT/'app.js').read_text())
a.output.write_text(s,encoding='utf-8');print(a.output.name,a.output.stat().st_size,'bytes')
