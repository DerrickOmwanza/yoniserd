# Awards Data Structure & Schema

## Current Awards Data

```javascript
{
    year: '2024',
    emoji: '🏅',
    title: 'Kisii Development Forum Recognition',
    description: 'Recognized for outstanding youth mentorship and research partnerships.'
},
{
    year: '2023',
    emoji: '🌍',
    title: 'East African Innovation Index',
    description: 'Featured for bridging climate action with vocational skills.'
},
{
    year: '2022',
    emoji: '🤝',
    title: 'Youth Networks Alliance Award',
    description: 'Awarded Best Community-Led Research Collaboration.'
}
```

---

## Data Schema

### Award Object Structure

```typescript
interface Award {
    year: string;        // "YYYY" format (e.g., "2024")
    emoji: string;       // Single emoji character
    title: string;       // Award name (bold text, ~5-8 words)
    description: string; // 1-2 sentence description (~10-20 words)
}
```

### Field Guidelines

#### Year
- **Format**: String (e.g., "2024")
- **Location**: Header badge (large, prominent)
- **Display**: White text on blue gradient
- **Example**: "2024"

#### Emoji
- **Type**: Single Unicode emoji
- **Size**: text-5xl (3rem)
- **Location**: Top of card content
- **Hover Effect**: Scales 10%
- **Examples**: 🏅 🌍 🤝 ⭐ 🎯 🚀 💡 🏆

#### Title
- **Length**: 4-8 words (optimal)
- **Max Length**: 60 characters recommended
- **Format**: Title case, clear and concise
- **Display**: text-xl, bold, gray-900 (blue on hover)
- **Examples**:
  - "Kisii Development Forum Recognition"
  - "East African Innovation Index"
  - "Youth Networks Alliance Award"

#### Description
- **Length**: 1-2 sentences (10-20 words)
- **Format**: Clear, concise, impactful
- **Display**: text-sm, gray-600
- **Examples**:
  - "Recognized for outstanding youth mentorship and research partnerships."
  - "Featured for bridging climate action with vocational skills."
  - "Awarded Best Community-Led Research Collaboration."

---

## Emoji Selection Guide

### Award/Recognition Theme
```
🏅 Medals & Achievement
🏆 Trophy/Competition
⭐ Star/Excellence
🥇 Gold Medal (1st place)
🥈 Silver Medal (2nd place)
🥉 Bronze Medal (3rd place)
🎖️ Military Medal
```

### Innovation & Impact
```
🚀 Rocket/Launch/Growth
💡 Light Bulb/Idea/Innovation
🌟 Sparkling/Excellence
✨ Sparkles/Transformation
🔥 Fire/Hot/Trending
⚡ Lightning/Energy/Speed
```

### Community & Connection
```
🤝 Handshake/Partnership/Collaboration
👥 People/Community/Group
❤️ Heart/Love/Passion
🌍 Global/World/Unity
🌱 Growth/Development/Sustainability
🎯 Target/Goals/Focus
```

### Specific Awards
```
🌍 International/Regional Awards
👔 Leadership Awards
📚 Research/Knowledge Awards
🎓 Educational Awards
💼 Business/Professional Awards
```

---

## Examples of Complete Award Cards

### Example 1: Innovation Award
```javascript
{
    year: '2024',
    emoji: '🚀',
    title: 'East African Innovation Summit Winner',
    description: 'First place in youth-led technology initiatives for sustainable development.'
}
```

### Example 2: Leadership Award
```javascript
{
    year: '2023',
    emoji: '👔',
    title: 'African Leadership Excellence Award',
    description: 'Recognized for transformational leadership in youth empowerment across East Africa.'
}
```

### Example 3: Research Award
```javascript
{
    year: '2022',
    emoji: '📊',
    title: 'Best Research Collaboration',
    description: 'Awarded for groundbreaking research on youth development and social impact.'
}
```

### Example 4: Sustainability Award
```javascript
{
    year: '2021',
    emoji: '🌱',
    title: 'Climate Action Leadership Award',
    description: 'Honored for youth-led environmental initiatives and sustainable livelihoods.'
}
```

---

## Adding New Awards

### Step 1: Prepare Data
```javascript
const newAward = {
    year: '2025',        // Current or past year
    emoji: '⭐',         // Choose appropriate emoji
    title: 'Award Name', // 4-8 words, clear
    description: '...'   // 1-2 sentences, concise
};
```

### Step 2: Validate
- ✅ Year is valid (YYYY format)
- ✅ Emoji is single character
- ✅ Title is 4-8 words
- ✅ Description is 1-2 sentences
- ✅ Content is accurate and current

### Step 3: Add to Array
```javascript
{[
    {
        year: '2024',
        emoji: '🏅',
        title: 'Kisii Development Forum Recognition',
        description: 'Recognized for outstanding youth mentorship and research partnerships.'
    },
    // ... existing awards ...
    {
        year: '2025',  // NEW AWARD
        emoji: '⭐',
        title: 'New Award Name',
        description: 'Award description here.'
    }
].map((award, index) => (
    // Card component
))}
```

---

## Best Practices

### Title Guidelines
✅ **Good**:
- "Kisii Development Forum Recognition" (7 words, clear)
- "East African Innovation Index" (4 words, concise)
- "Youth Networks Alliance Award" (4 words, specific)

❌ **Avoid**:
- "Recognition for Mentorship" (too generic)
- "Award" (too vague)
- "Award for Outstanding Youth Mentorship and Research Partnerships and Community Engagement" (too long)

### Description Guidelines
✅ **Good**:
- "Recognized for outstanding youth mentorship and research partnerships." (clear, specific)
- "Featured for bridging climate action with vocational skills." (action-oriented)
- "Awarded Best Community-Led Research Collaboration." (specific achievement)

❌ **Avoid**:
- "This award recognizes..." (unnecessary preamble)
- "We received an award" (passive)
- Very long descriptions (hard to read in card)

### Emoji Guidelines
✅ **Good**:
- One emoji per award
- Emoji that represents the award type
- Widely recognized emoji

❌ **Avoid**:
- Multiple emojis per card
- Obscure/complex emojis
- Emoji that doesn't match award type

---

## Emoji Meanings in Context

| Emoji | Award Type | Meaning |
|-------|-----------|---------|
| 🏅 | General Achievement | Medal of recognition |
| 🏆 | Competition Winner | First place trophy |
| ⭐ | Excellence | Outstanding performance |
| 🥇 | 1st Place | Gold medal winner |
| 🚀 | Innovation/Growth | Launch/momentum |
| 💡 | Ideas/Innovation | Bright ideas |
| 🌍 | Global/International | World impact |
| 🤝 | Partnership/Collaboration | Joint effort |
| 👔 | Leadership | Professional leadership |
| 📊 | Research/Data | Analytical work |
| 🌱 | Sustainability/Growth | Environmental/development |
| 💼 | Business/Professional | Business award |
| 🎯 | Goals/Achievement | Target achieved |
| ❤️ | Community/Care | Humanitarian |

---

## Responsive Text Length

The card layout handles variable text lengths:

### Mobile (1 column)
- Minimum width: 320px
- Maximum text before wrapping: 30-40 characters per line
- Optimal title: 4-6 words (20-35 chars)
- Optimal description: 10-15 words per line

### Tablet (2 columns)
- Minimum width: 280px per card
- Optimal title: 4-8 words
- Optimal description: 15-20 words per line

### Desktop (3 columns)
- Minimum width: 320px per card
- Optimal title: 4-8 words
- Optimal description: 15-25 words per line

---

## Data Validation Checklist

Before adding a new award, verify:

- ✅ Year is accurate (not future unless announced)
- ✅ Emoji renders correctly in all browsers
- ✅ Title is clear and professional
- ✅ Description is factually accurate
- ✅ No special characters causing issues
- ✅ Text fits well in card layout
- ✅ Emoji is appropriate for award type
- ✅ Information is publicly shareable

---

## Example: Full Award Entry

```javascript
{
    year: '2024',
    emoji: '🏅',
    title: 'Kisii Development Forum Recognition',
    description: 'Recognized for outstanding youth mentorship and research partnerships.'
}
```

**Validation**:
- ✅ Year: 2024 (current, accurate)
- ✅ Emoji: 🏅 (medal, appropriate)
- ✅ Title: 6 words (clear, professional)
- ✅ Description: 11 words (concise, specific)
- ✅ All text displays well in card

---

## Localization Notes

Current awards are in English. If translating:

- Keep emoji same (universal)
- Translate title accurately
- Translate description maintaining meaning
- Maintain word count (4-8 for title, 10-20 for description)
- Preserve formatting and punctuation

---

## Future Enhancement Ideas

1. **Add Category Field**
   ```javascript
   category: 'Innovation' | 'Leadership' | 'Impact' | 'Community'
   ```

2. **Add Organization Field**
   ```javascript
   organization: 'Kisii Development Forum'
   ```

3. **Add Link Field**
   ```javascript
   url: 'https://example.com/award'
   ```

4. **Add Certificate Image**
   ```javascript
   certificateImage: '/awards/award-2024.jpg'
   ```

5. **Add Recipient Name**
   ```javascript
   recipientName: 'Team Name' | 'Individual Name'
   ```

---

## Summary

The Awards data structure is simple yet flexible:
- **Minimal**: 4 fields (year, emoji, title, description)
- **Clear**: Follows established guidelines
- **Scalable**: Easy to add/remove/update awards
- **Professional**: Displays beautifully in responsive cards
- **Accessible**: Text-based with emoji support

This structure allows for easy maintenance while providing excellent visual presentation across all devices.
