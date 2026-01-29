from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import re

# Read the markdown file
with open('DATA_COLLECTION_CHECKLIST.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Create a new Word document
doc = Document()

# Set default font
style = doc.styles['Normal']
style.font.name = 'Calibri'
style.font.size = Pt(11)

# Split content by lines
lines = content.split('\n')

for line in lines:
    stripped = line.strip()
    
    # Handle headings
    if stripped.startswith('# '):
        heading = stripped[2:].strip()
        p = doc.add_heading(heading, level=1)
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    elif stripped.startswith('## '):
        heading = stripped[3:].strip()
        p = doc.add_heading(heading, level=2)
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    elif stripped.startswith('### '):
        heading = stripped[4:].strip()
        p = doc.add_heading(heading, level=3)
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    elif stripped.startswith('#### '):
        heading = stripped[5:].strip()
        p = doc.add_heading(heading, level=4)
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    
    # Handle checkboxes and bullet points
    elif stripped.startswith('- [ ]'):
        text = stripped[5:].strip()
        p = doc.add_paragraph('☐ ' + text, style='List Bullet')
    elif stripped.startswith('- '):
        text = stripped[2:].strip()
        p = doc.add_paragraph(text, style='List Bullet')
    
    # Handle bold text
    elif '**' in stripped:
        p = doc.add_paragraph()
        parts = stripped.split('**')
        for i, part in enumerate(parts):
            if i % 2 == 1:  # Bold parts
                run = p.add_run(part)
                run.bold = True
            else:
                p.add_run(part)
    
    # Handle numbered lists
    elif re.match(r'^[0-9]+\.\s', stripped):
        text = re.sub(r'^[0-9]+\.\s', '', stripped)
        p = doc.add_paragraph(text, style='List Number')
    
    # Handle regular paragraphs and empty lines
    elif stripped:
        p = doc.add_paragraph(stripped)
    else:
        p = doc.add_paragraph()

# Save the document
doc.save('DATA_COLLECTION_CHECKLIST.docx')
print("Word document created successfully: DATA_COLLECTION_CHECKLIST.docx")
