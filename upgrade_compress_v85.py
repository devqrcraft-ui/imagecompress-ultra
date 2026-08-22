import os
css_path = 'src/app/globals.css'
if os.path.exists(css_path):
    with open(css_path, 'a', encoding='utf-8') as f:
        f.write('\n/* 3D UI v85 */\n.btn-3d-blue{position:relative;display:inline-flex;align-items:center;padding:12px 24px;background:linear-gradient(180deg,#2563eb 0%,#1d4ed8 100%);color:#fff!important;font-weight:800;border-radius:8px;border:1px solid #60a5fa;box-shadow:0 4px 0 #1e3a8a,0 8px 15px rgba(0,0,0,0.3);transition:all .1s;cursor:pointer;text-transform:uppercase}\n.btn-3d-blue:hover{transform:translateY(-3px);box-shadow:0 7px 0 #1e3a8a,0 12px 20px rgba(37,99,235,0.4)}\n.btn-3d-blue:active{transform:translateY(2px);box-shadow:0 2px 0 #1e3a8a}\n')
