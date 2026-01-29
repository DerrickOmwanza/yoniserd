# YNIS-RD Website - Data Collection Checklist

**Purpose:** This document outlines all areas of the website where placeholder/dummy data needs to be replaced with real, accurate information from the organization.

**Instruction:** Share this checklist with YNIS-RD leadership and request they provide verified information for each item.

---

## 1. CONTACT INFORMATION (Constants)
**File:** `src/constants/index.js`

### Current Dummy Data:
- [ ] **Email:** Currently `info@youthintegrated.org` - **VERIFY** if this is the correct organizational email
- [ ] **Phone:** Currently `+254 7XX XXX XXX` - **REPLACE** with valid, working phone number(s)
  - Primary contact number
  - Alternative/backup number (if available)
- [ ] **Location:** Currently `Kisii, Kenya` - **VERIFY** if accurate and add complete office address if applicable
  - Street address
  - Building/office details
  - Office hours (if relevant)

---

## 2. SOCIAL MEDIA HANDLES (Constants)
**File:** `src/constants/index.js`

### Missing/Placeholder Links:
- [ ] **LinkedIn:** Currently `https://linkedin.com` - **PROVIDE** actual organizational LinkedIn profile URL
- [ ] **Twitter/X:** Currently `https://twitter.com` - **PROVIDE** actual Twitter handle and profile URL
- [ ] **Instagram:** Currently `https://instagram.com` - **PROVIDE** actual Instagram handle and profile URL
- [ ] **Facebook:** Currently `https://facebook.com` - **PROVIDE** actual Facebook page URL
- [ ] **YouTube:** Missing - **PROVIDE** if organization has a YouTube channel
- [ ] **TikTok:** Missing - **PROVIDE** if organization is active on TikTok

---

## 3. ORGANIZATIONAL INFORMATION (Constants)
**File:** `src/constants/index.js`

### Current Information to Verify:
- [ ] **Organization Name:** `Youth Network Integrated Services for Research & Development` - **CONFIRM** exact legal name
- [ ] **Short Name/Acronym:** `YNIS-RD` - **CONFIRM** official acronym
- [ ] **Domain:** `youthintegrated.org` - **CONFIRM** or update to correct domain
- [ ] **Founded Year:** Currently `2018` - **VERIFY** exact founding year (also shows 2013 in some places - **CLARIFY**)
- [ ] **Headquarters:** `Kisii, Kenya` - **CONFIRM** primary headquarters location
- [ ] **Legal Status:** `Registered Non-Governmental Organization (NGO) by the Kenyan Government` 
  - **VERIFY** current registration status
  - **PROVIDE** NGO registration number
  - **PROVIDE** date of registration
- [ ] **Mission Statement:** Currently shown in About page - **VERIFY** accuracy or provide updated version
- [ ] **Vision Statement:** Currently shown in About page - **VERIFY** accuracy or provide updated version
- [ ] **Organizational Motto:** `Innovate. Empower. Transform.` - **CONFIRM** if this is still accurate

---

## 4. CEO INFORMATION
**File:** `src/constants/index.js` and `src/pages/About.jsx`

### Current Information to Verify/Update:
- [ ] **CEO Name:** Currently `Dr. Samson Barongo, PhD` - **CONFIRM** current CEO name and full credentials
- [ ] **CEO Title:** Currently `Chief Executive Officer` - **CONFIRM** exact job title
- [ ] **CEO Biography/Background:** Currently minimal - **PROVIDE** detailed background information
- [ ] **CEO Email:** Missing - **PROVIDE** personal email for contact
- [ ] **CEO Photo:** Currently using placeholder - **PROVIDE** professional headshot
- [ ] **CEO Quote/Message:** Currently generic - **PROVIDE** personalized CEO message for About page
- [ ] **Years in Role:** Missing - **PROVIDE** how long current CEO has been in position

---

## 5. LEADERSHIP TEAM DETAILS
**File:** `src/pages/About.jsx`

### Missing Information (Currently Using Placeholder Cards):
- [ ] **Programme Officer Name & Details**
  - Full name
  - Qualifications/credentials
  - Email address
  - Phone number
  - Professional biography
  - Photo/headshot
- [ ] **Field Officers Names & Details**
  - Number of field officers
  - For each: Name, location, email, phone, role description, photo
- [ ] **Other Leadership Positions** (if applicable)
  - Finance Manager
  - Research Director
  - Operations Manager
  - Others

---

## 6. ORGANIZATIONAL CORE VALUES
**File:** `src/constants/index.js`

### Current Values (Verify Accuracy):
- [ ] Youth Empowerment - **CONFIRM**
- [ ] Innovation - **CONFIRM**
- [ ] Inclusivity - **CONFIRM**
- [ ] Collaboration - **CONFIRM**
- [ ] Integrity - **CONFIRM**
- [ ] Sustainability - **CONFIRM**
- [ ] Leadership - **CONFIRM**
- [ ] Knowledge Sharing - **CONFIRM**
- **NOTE:** Provide brief 1-2 sentence description for each value if not already available

---

## 7. PROGRAMS & INITIATIVES DETAILS
**File:** `src/pages/Programs.jsx`

### Current Programs (Verify & Expand Details):

#### Programs Listed:
1. **Children's Rights**
   - [ ] Confirmed as active program?
   - [ ] Current number of beneficiaries
   - [ ] Specific locations/regions
   - [ ] Key achievements/metrics
   - [ ] Program lead contact

2. **Environment**
   - [ ] Confirmed as active program?
   - [ ] Current number of beneficiaries
   - [ ] Specific locations/regions
   - [ ] Hectares/environmental impact metrics
   - [ ] Program lead contact

3. **Reproductive Health**
   - [ ] Confirmed as active program?
   - [ ] Current number of beneficiaries
   - [ ] Specific locations/regions
   - [ ] Key metrics/statistics
   - [ ] Program lead contact

4. **HIV/AIDS Awareness**
   - [ ] Confirmed as active program?
   - [ ] Current number of beneficiaries
   - [ ] Specific locations/regions
   - [ ] Testing/treatment metrics
   - [ ] Program lead contact

5. **Gender-Based Violence**
   - [ ] Confirmed as active program?
   - [ ] Current number of beneficiaries
   - [ ] Specific locations/regions
   - [ ] Survivor support metrics
   - [ ] Program lead contact

#### Other Programs (If More Exist):
- [ ] **Program Name:** 
  - Description
  - Locations
  - Number of beneficiaries
  - Key metrics

---

## 8. IMPACT METRICS & STATISTICS
**Files:** `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Impact.jsx`

### Current Statistics (Verify & Update):

**Home Page Stats:**
- [ ] Years of youth impact: Currently `12+` - **PROVIDE** exact years operational
- [ ] Communities served: Currently `50` - **VERIFY** actual number
- [ ] Graduates employed: Currently `75%` - **VERIFY** actual percentage and sample size

**About Page Impact Stats:**
- [ ] Years of youth impact: Currently `12+` - **VERIFY**
- [ ] Communities served: Currently `50` - **VERIFY**
- [ ] Youth empowered: Currently `2000+` - **VERIFY** and provide exact/updated number
- [ ] Graduate employment rate: Currently `75%` - **VERIFY**

**Impact Page Key Metrics:**
- [ ] Youth reached: Currently `10,000` - **VERIFY** and provide updated number
- [ ] Communities served: Currently `50` - **VERIFY**
- [ ] Programs running: Currently `15` - **VERIFY** actual number of active programs
- [ ] Employment success rate: Currently `75%` - **VERIFY**

**Impact Areas Metrics:**
- [ ] Youth trained: Currently `10,000+` - **VERIFY**
- [ ] Health campaigns reach: Currently `2,500+` per year - **VERIFY**
- [ ] Hectares restored: Currently `50+` - **VERIFY**
- [ ] Research publications: Currently `5+` - **VERIFY** and provide list
- [ ] Girls reached: Currently `3,000+` - **VERIFY**

**ALL METRICS:** For each statistic, provide:
- Exact current number
- Time period (as of what date?)
- Data source/how it's measured
- Confidence level of accuracy

---

## 9. ORGANIZATIONAL JOURNEY/TIMELINE
**File:** `src/pages/About.jsx`

### Current Timeline (Verify & Update):
- [ ] **Year 2013:** `Founded with Vision` - **VERIFY** founding year (discrepancy: About says 2013, but constants say 2018)
  - Clarify actual founding year
  - Provide founding story/context

- [ ] **Year 2016:** `First Program Launch` - **VERIFY**
  - Which program was first?
  - How many youth reached?
  - Outcomes

- [ ] **Year 2019:** `Regional Expansion` - **VERIFY**
  - Details of expansion
  - Regions added

- [ ] **Year 2023:** `Research Leadership` - **VERIFY**
  - Specific recognition/achievement

---

## 10. AWARDS & RECOGNITIONS
**File:** `src/pages/About.jsx`

### Current Awards (Verify & Expand):

**2024 Award:**
- Title: `Kisii Development Forum Recognition`
- [ ] **VERIFY** this award exists
- [ ] **PROVIDE** official award name
- [ ] **PROVIDE** awarding organization
- [ ] **PROVIDE** award description/criteria

**2023 Award:**
- Title: `East African Innovation Index`
- [ ] **VERIFY** actual award name
- [ ] **PROVIDE** full details of recognition
- [ ] **PROVIDE** impact/significance

**2022 Award:**
- Title: `Youth Networks Alliance Award`
- [ ] **VERIFY** actual award name
- [ ] **PROVIDE** full award details

**Additional Awards:**
- [ ] **PROVIDE** any other major awards, certifications, or recognitions
- [ ] For each: Year, Award Name, Awarding Organization, Description

---

## 11. PARTNERSHIPS & COLLABORATORS
**File:** `src/pages/Programs.jsx`, `src/pages/News.jsx`

### Current Partnership Mentioned:
- **Kenya Ministry of Education** (in News) - **PROVIDE**:
  - [ ] Confirmation of partnership status
  - [ ] Partnership date
  - [ ] Number of schools involved
  - [ ] Number of students reached
  - [ ] Contact person at Ministry

### Missing Partners/Collaborators:
- [ ] **PROVIDE** list of current major partners:
  - NGOs/CBOs
  - Government agencies
  - Educational institutions
  - Corporate partners
  - Donors/funding organizations
  - For each: Organization name, partnership focus, duration, contact person

---

## 12. TESTIMONIALS & SUCCESS STORIES
**Files:** `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Impact.jsx`, `src/pages/News.jsx`

### Current Stories (Verify & Add Real Data):

**Success Stories Currently Listed:**

1. **Dennis (Carpentry)**
   - [ ] **VERIFY** story is accurate
   - [ ] Dennis's full name (if sharing publicly)
   - [ ] How many people does he now employ?
   - [ ] Current business status
   - [ ] Permission to share story?
   - [ ] Actual contact for testimonial?

2. **Sarah (Youth Health Leader)**
   - [ ] **VERIFY** story accuracy
   - [ ] Full name (if sharing publicly)
   - [ ] Which school health club?
   - [ ] How many people does she reach?
   - [ ] Permission to share story?

3. **Mr. Kipchoge (Community Partner)**
   - [ ] **VERIFY** story accuracy
   - [ ] Full details of partnership
   - [ ] Exact hectares restored
   - [ ] Permission to share story?

4. **Dr. Kiplagat (Policy Maker)**
   - [ ] **VERIFY** story accuracy
   - [ ] Policy title/details
   - [ ] County details
   - [ ] Permission to share story?

### Additional Stories Needed:
- [ ] **PROVIDE** other success stories/testimonials from:
  - Program beneficiaries
  - Community leaders
  - Partner organizations
  - Government officials
  - Donors/supporters

For each story: Name, role, quote, full story, photo (if available)

---

## 13. NEWS & RECENT UPDATES
**File:** `src/pages/News.jsx`

### Current Stories Dated March-February 2024:
- [ ] **REPLACE** all dated news items with current/recent updates
- [ ] **UPDATE** all story dates to reflect 2025 or remove outdated stories
- [ ] **PROVIDE** new/current success stories with today's data

### Information Needed for Each News Item:
- [ ] Current date
- [ ] Story title
- [ ] Summary/excerpt
- [ ] Full story content
- [ ] Category
- [ ] Associated image (if available)
- [ ] Impact metrics (if applicable)

---

## 14. IMPACT PAGE JOURNEY/TIMELINE
**File:** `src/pages/Impact.jsx`

### Current Timeline (Verify & Update):
- [ ] **2012** - `YNIS-RD Founded` - **VERIFY** founding year
- [ ] **2015** - `First 5 Programs Launched` - **VERIFY** accuracy
- [ ] **2018** - `Reached 5,000+ Youth` - **VERIFY** accuracy
- [ ] **2021** - `Research Hub Launched` - **VERIFY** details
- [ ] **2023** - `Policy Influence` - **VERIFY** which policies
- [ ] **2024** - `10,000+ Youth Reached` - **VERIFY** current reach

**NOTE:** This timeline conflicts with other sections showing founding year as both 2012 and 2013 and 2018 - **CLARIFY ACTUAL FOUNDING YEAR**

---

## 15. VOLUNTEER INFORMATION
**File:** `src/pages/Contact.jsx`

### Volunteer Opportunities (Verify & Expand):

Currently Listed Categories:
1. **Research & Documentation** - **PROVIDE:**
   - [ ] Specific projects needing support
   - [ ] Time commitment
   - [ ] Required skills
   - [ ] Training provided?
   - [ ] Volunteer contact person

2. **Mentorship & Training** - **PROVIDE:**
   - [ ] Specific mentorship areas
   - [ ] Time commitment
   - [ ] Required background
   - [ ] Training materials available?
   - [ ] Volunteer contact person

3. **Communications & Stories** - **PROVIDE:**
   - [ ] Specific communication needs
   - [ ] Tools/platforms used
   - [ ] Time commitment
   - [ ] Training provided?
   - [ ] Volunteer contact person

### Additional Volunteer Opportunities:
- [ ] **PROVIDE** any other volunteer roles/opportunities
- [ ] For each: Role name, description, time commitment, requirements, contact

---

## 16. RESPONSE TIME COMMITMENT
**File:** `src/pages/Contact.jsx`

### Current Information:
- "We typically respond within 24-48 hours during business days"
- [ ] **VERIFY** this is accurate response time
- [ ] **PROVIDE** business hours/days
- [ ] **PROVIDE** expected response time for:
  - General inquiries
  - Partnership requests
  - Volunteer applications
  - Media inquiries

---

## 17. ORGANIZATIONAL REACH & LOCATIONS
**Multiple Files**

### Geographic Information:
- [ ] **PRIMARY LOCATION:** `Kisii` - **VERIFY** exact address with office details
- [ ] **REGIONAL OFFICES:** **PROVIDE** if any:
  - Office locations
  - Contact persons
  - Contact details

- [ ] **PROGRAM LOCATIONS:** **PROVIDE** all communities/regions where programs operate:
  - County
  - Specific community names
  - Program type
  - Number of beneficiaries per location

---

## 18. ADDITIONAL BUSINESS INFORMATION

### Mailing Address:
- [ ] **PROVIDE** formal mailing address if different from office location

### Website/Domain:
- [ ] **VERIFY** website domain is correct (currently `youthintegrated.org`)
- [ ] **PROVIDE** any alternative domains

### Legal Entity Details:
- [ ] **PROVIDE** NGO registration certificate number
- [ ] **PROVIDE** Tax ID/PIN number
- [ ] **PROVIDE** Primary contact person for official communications
- [ ] **PROVIDE** Finance/accounting contact

### Funding & Donors:
- [ ] **PROVIDE** (if public) list of major donors/funding organizations
- [ ] **PROVIDE** (if public) annual budget information

### Research Publications:
- [ ] **PROVIDE** list of all published research
- [ ] For each: Title, date, authors, link/where to access

---

## SUMMARY: PRIORITY ITEMS

**CRITICAL (Must have immediately):**
1. Verified email address
2. Verified working phone number(s)
3. Confirmed CEO/leadership information
4. Verified social media profiles
5. Accurate founding date (clarify 2012 vs 2013 vs 2018)
6. Current impact statistics with dates

**HIGH PRIORITY (Important for credibility):**
1. Complete leadership team details with photos
2. Current news/success stories (2025 data)
3. Verified awards and recognitions
4. Program details and current metrics
5. Major partnerships documentation

**MEDIUM PRIORITY (Nice to have):**
1. Detailed testimonials and success stories
2. Geographic distribution of programs
3. Volunteer opportunities details
4. Research publications list
5. Donor/funding information (if public)

---

## INSTRUCTIONS FOR SUBMITTING DATA

Please provide all information in one of the following formats:
1. Email document with details
2. Google Sheet/Excel file with organized data
3. Word document with all sections completed
4. Physical copy if preferred

**Please ensure:**
- [ ] All phone numbers are current and working
- [ ] All email addresses are monitored
- [ ] All social media URLs are active
- [ ] All statistics are verified and current as of 2025
- [ ] All stories have permission to be shared publicly
- [ ] All names and titles are current

**Deadline:** Please submit completed information by: _______________

**Questions/Clarifications:** Contact _______________

---

## DOCUMENT VERSION INFO

- **Created:** 2025
- **Purpose:** Data collection for website accuracy
- **To be Updated:** As new information is received
- **Next Review Date:** _______________
