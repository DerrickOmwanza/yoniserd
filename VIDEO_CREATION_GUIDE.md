# YNIS-RD Website Video - Complete Creation Guide

**Objective:** Create a professional 8-10 minute video showcasing all website pages with synchronized audio narration.

**Estimated Creation Time:** 2-3 hours

**Final Video Format:** MP4 (suitable for sharing on social media, email, presentations)

---

## OPTION 1: USING WINDOWS 11 BUILT-IN TOOLS (FREE & EASIEST)

### Step 1: Prepare Your Setup

1. **Open your website**
   - Navigate to `http://localhost:3000` in your browser (make sure your dev server is running with `npm start`)
   - Or if deployed, use the live URL

2. **Close unnecessary applications**
   - Close email, notifications, other browser tabs
   - Silence your phone
   - Ensure good lighting if you'll do voiceover recording

3. **Set screen resolution**
   - Recommended: 1920x1080 (Full HD)
   - Right-click desktop → Display settings → Resolution

### Step 2: Record Your Screen

**Using Windows Screen Recorder (Xbox Game Bar):**

1. Press **Windows Key + G** to open Xbox Game Bar
2. Click the **"Start Recording"** button (or press Windows Key + Alt + R)
3. You'll see a small recording indicator in the top-left corner

**Manual Page Navigation During Recording:**
- Homepage → About (scroll through all sections) → Programs → Our Work → Impact → News → Contact → Back to Homepage
- Spend 40-60 seconds on each page
- Scroll slowly so viewers can read content
- Move cursor smoothly, not erratically

4. When finished, press **Windows Key + Alt + R** to stop
5. Video saves automatically to: `Videos > Captures`

### Step 3: Record Audio Narration (Separate Audio Track)

**Using Windows Voice Recorder:**

1. Open **Voice Recorder** (built into Windows 11)
   - Search: "Voice Recorder" in Windows Search
   - Or go to: Start → All apps → Voice Recorder

2. Click the **Record** button (blue circle)

3. **Read the provided narration script** clearly and at a steady pace
   - Speak at about 120-150 words per minute
   - Pause naturally between sentences
   - Emphasize key numbers and achievements
   - Show enthusiasm for the organization's work

4. When finished, click **Stop**

5. Name it: `YNIS-RD_Narration.m4a`

6. Save it to your project folder

### Step 4: Combine Video & Audio Using FREE Software

**Option A: Using DaVinci Resolve (Professional Quality, FREE)**

1. **Download & Install:**
   - Go to: https://www.blackmagicdesign.com/products/davinciresolve
   - Click "Download DaVinci Resolve"
   - Choose "DaVinci Resolve" (free version)
   - Install on your computer

2. **Import Your Files:**
   - Open DaVinci Resolve
   - Create a new project
   - Click "File" → "Import" → Select your screen recording
   - Drag video to the timeline

3. **Add Audio Track:**
   - Click "File" → "Import" → Select your narration audio
   - Drag audio file to the timeline below the video track
   - Align them so audio starts where narration begins

4. **Sync & Edit:**
   - Use the timeline scrubber to ensure video and audio are synchronized
   - You can trim parts if needed
   - Adjust audio levels: Click audio track → "Inspector" → Volume slider

5. **Add Title & Closing:**
   - Click "Fusion" tab at bottom
   - Add opening title: "YNIS-RD Website Tour"
   - Add closing title with contact info
   - Or add text overlays on specific sections

6. **Export Your Video:**
   - Click "File" → "Export"
   - Choose format: **H.264** (MP4)
   - Resolution: **1920x1080** (Full HD)
   - Frame rate: **30fps**
   - Quality: **High"
   - Name: `YNIS_RD_Website_Tour.mp4`
   - Click "Export"

---

## OPTION 2: USING OBS STUDIO (Free, Professional Quality)

### Step 1: Download & Install OBS Studio

1. Go to: https://obsproject.com/
2. Click "Download" and select your OS (Windows)
3. Run installer and follow prompts
4. Launch OBS Studio

### Step 2: Configure OBS for Screen Recording

1. **Add Video Source:**
   - Click "+" under "Sources"
   - Select "Display Capture"
   - Choose the monitor with your website
   - Click "OK"

2. **Add Audio Input:**
   - Click "+" under "Sources"
   - Select "Audio Input Capture"
   - Choose your microphone
   - Click "OK"

3. **Configure Settings:**
   - Click "Settings" (bottom-left)
   - Go to "Output" tab
   - Set Recording Quality to "High Quality Medium File Size"
   - Go to "Video" tab
   - Base Canvas Resolution: **1920x1080**
   - Common FPS Values: **30**

### Step 3: Record Your Content

1. **Start Recording:**
   - Click "Start Recording" button
   - It will save to your default recording folder

2. **Navigate your website** while recording (as outlined above)

3. **Speak your narration** while the recording is in progress
   - OR record narration separately and sync later

4. **Stop Recording:**
   - Click "Stop Recording"
   - File saved automatically (usually in Documents > OBS)

### Step 4: Export & Share

Your video is ready to share! OBS saves as `.mkv` or `.mp4` depending on settings.

---

## OPTION 3: USING LOOM (Simplest, Cloud-Based)

### Why Loom?
- Easiest option—no complex editing needed
- Records screen AND mic simultaneously
- Auto-transcribes your audio
- Built-in editing tools
- Cloud storage
- Shareable link (great for emailing to stakeholders)

### Step 1: Sign Up & Install

1. Go to: https://www.loom.com
2. Click "Sign up" and create account (free tier available)
3. Install Loom browser extension or desktop app

### Step 2: Start Recording

1. Click Loom icon → "Start recording"
2. Choose "Entire screen" or "Tab"
3. Select which audio to record (microphone)
4. Click "Start recording"

### Step 3: Record Your Content

1. **Navigate website** (40-60 seconds per page)
2. **Narrate simultaneously** using your microphone
3. Speak clearly at steady pace
4. Follow the narration script provided

### Step 4: Stop & Share

1. Click "Stop" when done
2. Loom automatically processes video
3. Gets unique shareable link: `loom.com/share/xxxxx`
4. Can download as MP4 or share link directly
5. Can add captions, trim, edit in Loom interface

---

## OPTION 4: ADOBE CAPTIVATE (Premium Option)

**Best for:** Adding interactive elements, quizzes, tracking viewer engagement

**Note:** Requires Adobe Creative Cloud subscription ($55/month)

1. Open Adobe Captivate
2. File → New → Record Project
3. Screen recording dialog appears
4. Select display and microphone
5. Click "Record"
6. Navigate and narrate
7. Click "Stop"
8. Edit in Captivate timeline
9. Publish as MP4

---

## DETAILED RECORDING WALKTHROUGH

### Navigation Script (What to show while talking)

**[0:00-0:15] INTRO**
- Keep homepage visible
- Don't scroll yet
- Let narration set context

**[0:15-1:15] HOME PAGE**
- Start at top of page
- Show banner image
- Scroll down slowly to show:
  - Hero section with text
  - Statistics cards
  - Program highlights
  - Impact metrics
  - Success stories
  - Values grid
  - CTA button at bottom

**[1:15-2:30] ABOUT PAGE - Overview to Values**
- Click About in navbar
- Show mission section (full screen)
- Scroll down to organization details
- Show CEO section with photo
- Continue to leadership team
- Scroll through journey timeline
- Show awards section
- Show impact statistics
- Conclude with values grid

**[2:30-3:20] PROGRAMS PAGE**
- Click Programs
- Show all 5 program cards
- Scroll to partnerships section
- Highlight partnership CTA

**[3:20-4:20] OUR WORK PAGE**
- Click Our Work
- Show photo gallery
- Scroll slowly through gallery
- Show featured initiatives cards
- Highlight key metrics on each card

**[4:20-5:30] IMPACT PAGE**
- Click Impact
- Show metrics with animations
- Scroll through impact areas
- Show testimonials
- Show timeline
- Scroll to CTA section

**[5:30-6:25] NEWS PAGE**
- Click News/Stories
- Show story cards
- Demonstrate filter functionality (click a category)
- Show how stories are organized
- Highlight story call-to-action

**[6:25-7:15] GALLERY PAGE**
- Click Gallery
- Show photo slideshow
- Let images display
- Note descriptive captions

**[7:15-8:05] CONTACT PAGE**
- Click Contact
- Show contact form
- Highlight contact information cards
- Show volunteer opportunities
- Show email/phone prominently

**[8:05-8:30] CLOSING**
- Return to homepage
- Or show contact information one more time
- End on a strong visual

---

## AUDIO RECORDING TIPS

### Setting Up Your Microphone

1. **Choose a quiet room**
   - Avoid wind noise (if outside)
   - Close windows
   - Turn off fans, AC during recording

2. **Microphone placement**
   - 6-12 inches from mouth
   - Slightly off to the side (reduces plosives)
   - Stable position (use mic stand if possible)

3. **Test recording**
   - Make a short test recording
   - Listen back
   - Check for:
     - Background noise
     - Volume level (should be clear, not distorted)
     - Echo or reverb

### Narration Delivery

1. **Pace yourself**
   - Read at 120-150 words per minute
   - Slower = more professional
   - Use natural pauses between sentences

2. **Emphasis**
   - Emphasize numbers: "Seventy-FIVE percent"
   - Emphasize achievements: "Fifty COMMUNITIES served"
   - Vary tone to maintain interest

3. **Mistakes?**
   - If you make a mistake, pause 2 seconds, then repeat the sentence
   - You can edit out the mistake later

4. **Energy**
   - Smile while speaking (changes your voice tone positively)
   - Show enthusiasm for the organization's work
   - Speak with conviction

### Audio Editing

If using separate audio track:

1. **Remove background noise:**
   - Use Audacity (free): https://www.audacityteam.org/
   - Effects → Noise Reduction
   - Select a sample of silence
   - Apply

2. **Adjust volume:**
   - Normalize audio to -3dB
   - Avoid clipping/distortion

3. **Add subtle background music:**
   - Optional: royalty-free background music at low volume
   - Sources: Epidemic Sound, AudioJungle, YouTube Audio Library
   - Keep music at 20-30% volume so narration is primary

---

## FINAL VIDEO CHECKLIST

Before sharing, verify:

- [ ] Video resolution is 1920x1080 (Full HD)
- [ ] Audio is clear and synchronized with video
- [ ] No background noise or distracting sounds
- [ ] Narration is audible and easy to understand
- [ ] All website pages are shown (10 pages)
- [ ] Pacing is appropriate (not too fast, not too slow)
- [ ] Video length is 8-10 minutes
- [ ] No sensitive information is visible
- [ ] File is saved as MP4 format
- [ ] File size is reasonable (100-500 MB for 10 minutes)
- [ ] Video plays smoothly on different devices (phone, tablet, computer)

---

## OPTIMIZATION FOR DIFFERENT PLATFORMS

### For Email Sharing
- **Size:** Compress to 50-100 MB
- **Format:** MP4 with H.264 codec
- **Tool:** HandBrake (free) for compression
- **Note:** Some email providers limit file sizes; consider sharing via link instead

### For Social Media (LinkedIn, Facebook, YouTube)
- **LinkedIn:**
  - Upload directly (supports MP4)
  - Max 5 GB per file
  - Optimal dimensions: 1200 x 627 (16:9)
  
- **YouTube:**
  - Upload as unlisted or private
  - Share link with stakeholders
  - Allows longer content (no time limit)
  - Can add cards and end screens
  
- **Facebook:**
  - Auto-converts to Facebook format
  - Upload directly
  - Optimal: 1200 x 628

### For PowerPoint Presentations
- Insert → Video → select your MP4
- Embeds directly in presentation
- Works best if stored on same hard drive

### For Website
- Upload to hosting platform
- Use video hosting (Vimeo, YouTube unlisted)
- Embed with HTML5 player
- Add video to website About or Home page

---

## WORKFLOW SUMMARY

**Fastest Path (Using Loom):**
1. Sign up for Loom (2 min)
2. Record screen + narration simultaneously (10 min)
3. Loom processes automatically (2 min)
4. Share link with stakeholders (1 min)
**Total: ~15 minutes**

**Professional Path (Using DaVinci Resolve):**
1. Record screen video using Windows Game Bar (10 min)
2. Record narration using Voice Recorder (8 min)
3. Download DaVinci Resolve (5 min)
4. Combine video + audio in timeline (15 min)
5. Export as MP4 (10 min)
**Total: ~50 minutes**

**Simple Path (Using OBS Studio):**
1. Download OBS Studio (5 min)
2. Configure sources (5 min)
3. Record screen + narration live (10 min)
4. Export (already done automatically)
**Total: ~20 minutes**

---

## TROUBLESHOOTING

**Problem:** Audio is out of sync with video
- **Solution:** In your video editor, drag audio track to align with video. Check the timeline markers.

**Problem:** Video is choppy/frames are dropping
- **Solution:** Close background apps, reduce screen resolution to 1080p, lower frame rate to 30fps

**Problem:** Audio volume is too quiet
- **Solution:** Move mic closer, speak louder, increase microphone input in settings, normalize audio in editing software

**Problem:** File size is too large
- **Solution:** Compress using HandBrake (free tool), reduce bitrate to 4000-6000 kbps

**Problem:** Background noise is audible
- **Solution:** Record in quieter room, use noise gate in audio software, apply noise reduction filter

---

## SHARING THE VIDEO

Once complete, share via:

1. **Email Link** (Preferred for large files)
   - Upload to Google Drive, OneDrive, or Dropbox
   - Share link with stakeholders
   - Can set permissions (view-only)

2. **YouTube (Unlisted)**
   - Upload as unlisted (not searchable)
   - Share link with specific people
   - No file size limits
   - Can track views

3. **Loom (If using that platform)**
   - Auto-shareable link
   - Recipients don't need account
   - Can track viewing duration

4. **WhatsApp/Telegram**
   - If file is under 100 MB
   - Good for quick sharing

5. **Website**
   - Embed on homepage or About page
   - Shows professionalism
   - Increases engagement

---

## EXAMPLE VIDEO SCRIPT TIMING

| Time | Location | Action |
|------|----------|--------|
| 0:00-0:15 | Home | Intro narration, show homepage |
| 0:15-1:15 | Home | Scroll through all home sections |
| 1:15-2:30 | About | Navigate and scroll About page |
| 2:30-3:20 | Programs | Show all program cards |
| 3:20-4:20 | Our Work | Show gallery and initiatives |
| 4:20-5:30 | Impact | Show metrics and stories |
| 5:30-6:25 | News | Show news stories |
| 6:25-7:15 | Gallery | Show photo gallery |
| 7:15-8:05 | Contact | Show contact form and info |
| 8:05-8:30 | Home | Closing statement |

