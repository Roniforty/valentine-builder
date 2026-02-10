// Valentine's Website Builder - Main JavaScript
// All functionality in one file for 24-hour MVP

// ============================================
// CONFIGURATION
// ============================================

const GIPHY_API_KEY = 'nKHx6hxuatG8lLzhX9J8fO3DaQUpZjUD'; // Replace with actual key
const STRIPE_PUBLIC_KEY = 'YOUR_STRIPE_KEY'; // Replace with actual key

// ============================================
// TEMPLATES DATA
// ============================================

const templates = [
    {
        id: 'classic-romance',
        name: 'Classic Romance',
        category: 'romantic',
        description: 'Timeless pink hearts and elegant animations',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffecf2" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23ff1744" text-anchor="middle"%3E❤️%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#ffecf2',
            bgGradient: 'linear-gradient(45deg, #ffecf2, #ffe0e9)',
            mainHeading: 'Will you be my Valentine?',
            buttonYesText: 'Yes! 💖',
            buttonNoText: 'No',
            buttonYesColor: '#ff4d6d',
            buttonNoColor: '#f8f9fa',
            textColor: 'violet',
            heartColor: '#ff6b81',
            heartShape: '❤️',
            heartCount: 20,
            heartSpeed: 'medium',
            noMessages: [
                "Are you sure? 🥺",
                "Really? Think again! 💔",
                "Please reconsider! 😢",
                "You're breaking my heart! 💔",
                "Just give it a chance! 🙏",
                "Pretty please? 🥹"
            ],
            successHeading: "Yay! I knew you'd say yes! 🎉",
            successMessage: "I'm so happy! Let's make this Valentine's Day special! 💕",
            mainImage: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
            successImage: 'https://media.giphy.com/media/UVk5yzljef0kGiayL1/giphy.gif',
            socialLink: 'https://www.facebook.com/',
            confettiColors: ['#ff6b9d', '#c44569', '#f8b500', '#ff6348', '#ff4757'],
            confettiCount: 100
        }
    },
    {
        id: 'minimal-elegant',
        name: 'Minimal Elegant',
        category: 'elegant',
        description: 'Sophisticated black and gold aesthetics',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23ffd700" text-anchor="middle"%3E✨%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#1a1a1a',
            bgGradient: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
            mainHeading: 'Be Mine?',
            buttonYesText: 'Yes ✨',
            buttonNoText: 'Not Yet',
            buttonYesColor: '#ffd700',
            buttonNoColor: '#3a3a3a',
            textColor: '#ffd700',
            heartColor: '#ffd700',
            heartShape: '✨',
            heartCount: 15,
            heartSpeed: 'slow',
            noMessages: [
                "Think about it? ✨",
                "Take your time...",
                "I'll wait for you 💛",
                "Whenever you're ready..."
            ],
            successHeading: "How wonderful! ✨",
            successMessage: "Looking forward to our special day together.",
            mainImage: 'https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif',
            successImage: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif',
            socialLink: 'https://www.instagram.com/',
            confettiColors: ['#ffd700', '#ffed4e', '#fff9c4', '#f9a825', '#f57f17'],
            confettiCount: 80
        }
    },
    {
        id: 'funny-chaos',
        name: 'Funny Chaos',
        category: 'funny',
        description: 'Playful and humorous with lots of energy',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ff6b35" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23fff" text-anchor="middle"%3E😂%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#ff6b35',
            bgGradient: 'linear-gradient(45deg, #ff6b35, #f7931e)',
            mainHeading: "You're stuck with me! 😂",
            buttonYesText: 'YESSS! 🎉',
            buttonNoText: 'Nope',
            buttonYesColor: '#00b894',
            buttonNoColor: '#fdcb6e',
            textColor: '#ffffff',
            heartColor: '#fdcb6e',
            heartShape: '😂',
            heartCount: 40,
            heartSpeed: 'fast',
            noMessages: [
                "Wrong answer! 😂",
                "Try again! 🤪",
                "Nope, not accepting that! 😜",
                "C'mon, you know you want to! 🎭",
                "Last chance! 🎪"
            ],
            successHeading: "FINALLY! 🎉",
            successMessage: "Took you long enough! Ready for the best Valentine's ever? 😂💕",
            mainImage: 'https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif',
            successImage: 'https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif',
            socialLink: 'https://twitter.com/',
            confettiColors: ['#ff6b35', '#f7931e', '#fdcb6e', '#00b894', '#0984e3'],
            confettiCount: 150
        }
    },
    {
        id: 'kawaii-cute',
        name: 'Kawaii Cute',
        category: 'cute',
        description: 'Adorable pastel colors and cute characters',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ffeef8" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23ff69b4" text-anchor="middle"%3E🌸%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#ffeef8',
            bgGradient: 'linear-gradient(45deg, #ffeef8, #d4f1f4)',
            mainHeading: 'Be my Valentine? 🌸',
            buttonYesText: 'Yes! 💕',
            buttonNoText: 'Maybe...',
            buttonYesColor: '#ff69b4',
            buttonNoColor: '#ffd1dc',
            textColor: '#ff69b4',
            heartColor: '#ffb3d9',
            heartShape: '🌸',
            heartCount: 30,
            heartSpeed: 'medium',
            noMessages: [
                "Pwease? 🥺",
                "Pretty pwease? 🌸",
                "With cherries on top? 🍒",
                "You're so cute when you hesitate! 💕",
                "One more chance? 🌈"
            ],
            successHeading: "Yay! So happy! 🎀",
            successMessage: "You're the sweetest! Can't wait for our special day! 🌸💕",
            mainImage: 'https://media.giphy.com/media/LmBsnpDCuturMhtLfw/giphy.gif',
            successImage: 'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif',
            socialLink: 'https://www.snapchat.com/',
            confettiColors: ['#ffb3d9', '#ff69b4', '#d4f1f4', '#ffccf9', '#fff0f5'],
            confettiCount: 100
        }
    },
    {
        id: 'retro-vintage',
        name: 'Retro Vintage',
        category: 'romantic',
        description: 'Classic 1950s romance vibes',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d4a373" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23fff" text-anchor="middle"%3E💝%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#d4a373',
            bgGradient: 'linear-gradient(45deg, #d4a373, #e8c4a0)',
            mainHeading: 'Will You Be My Sweetheart?',
            buttonYesText: 'Oh Yes! 💝',
            buttonNoText: 'Not Sure',
            buttonYesColor: '#c41e3a',
            buttonNoColor: '#f4e8d8',
            textColor: '#c41e3a',
            heartColor: '#c41e3a',
            heartShape: '💝',
            heartCount: 20,
            heartSpeed: 'slow',
            noMessages: [
                "Don't be shy, darling! 💋",
                "Let's go steady? 💝",
                "Pretty please, sweetheart? 🌹",
                "You're making me blush! 💕"
            ],
            successHeading: "Oh, How Wonderful! 💝",
            successMessage: "You've made me the happiest! Let's make memories together! 🌹",
            mainImage: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
            successImage: 'https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif',
            socialLink: 'https://www.facebook.com/',
            confettiColors: ['#c41e3a', '#d4a373', '#f4e8d8', '#8b4513', '#cd5c5c'],
            confettiCount: 90
        }
    },
    {
        id: 'neon-modern',
        name: 'Neon Modern',
        category: 'elegant',
        description: 'Cyberpunk-inspired with glowing effects',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%230a0e27" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23ff006e" text-anchor="middle"%3E💎%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#0a0e27',
            bgGradient: 'linear-gradient(45deg, #0a0e27, #1a1a2e)',
            mainHeading: 'Be My Valentine?',
            buttonYesText: 'HELL YES 💎',
            buttonNoText: 'Nah',
            buttonYesColor: '#ff006e',
            buttonNoColor: '#8338ec',
            textColor: '#00f5ff',
            heartColor: '#ff006e',
            heartShape: '💎',
            heartCount: 25,
            heartSpeed: 'medium',
            noMessages: [
                "You sure about that? 💎",
                "Reconsider? ⚡",
                "Come on... 🌟",
                "Let's glow together! ✨"
            ],
            successHeading: "PERFECT! ⚡",
            successMessage: "Ready to light up Valentine's Day together! 💎✨",
            mainImage: 'https://media.giphy.com/media/l0HlPystfePnAI3G8/giphy.gif',
            successImage: 'https://media.giphy.com/media/26tPcNb7LeE0kXXna/giphy.gif',
            socialLink: 'https://www.instagram.com/',
            confettiColors: ['#ff006e', '#8338ec', '#00f5ff', '#fb5607', '#ffbe0b'],
            confettiCount: 120
        }
    },
    {
        id: 'nature-organic',
        name: 'Nature Organic',
        category: 'cute',
        description: 'Earth tones with floral elements',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e8f5e9" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%234caf50" text-anchor="middle"%3E🌿%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#e8f5e9',
            bgGradient: 'linear-gradient(45deg, #e8f5e9, #c8e6c9)',
            mainHeading: 'Grow With Me? 🌿',
            buttonYesText: 'Yes! 🌸',
            buttonNoText: 'Not Yet',
            buttonYesColor: '#4caf50',
            buttonNoColor: '#a5d6a7',
            textColor: '#2e7d32',
            heartColor: '#66bb6a',
            heartShape: '🌸',
            heartCount: 25,
            heartSpeed: 'slow',
            noMessages: [
                "Let love bloom? 🌸",
                "Plant the seed? 🌱",
                "Watch us grow? 🌿",
                "Natural selection? 💚"
            ],
            successHeading: "Wonderful! 🌻",
            successMessage: "Let's grow our love story together! 🌿💚",
            mainImage: 'https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif',
            successImage: 'https://media.giphy.com/media/KcW5EXlTvw3AitXkSv/giphy.gif',
            socialLink: 'https://www.facebook.com/',
            confettiColors: ['#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9'],
            confettiCount: 100
        }
    },
    {
        id: 'galaxy-cosmic',
        name: 'Galaxy Cosmic',
        category: 'elegant',
        description: 'Space-themed with starry animations',
        thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23120458" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="60" fill="%23fff" text-anchor="middle"%3E🌟%3C/text%3E%3C/svg%3E',
        defaults: {
            bgColor: '#120458',
            bgGradient: 'linear-gradient(45deg, #120458, #5b247a)',
            mainHeading: 'You Are My Universe 🌌',
            buttonYesText: 'To Infinity! 🚀',
            buttonNoText: 'Maybe',
            buttonYesColor: '#9d4edd',
            buttonNoColor: '#3c096c',
            textColor: '#e0aaff',
            heartColor: '#c77dff',
            heartShape: '⭐',
            heartCount: 30,
            heartSpeed: 'medium',
            noMessages: [
                "Journey with me? 🌙",
                "Explore the cosmos together? 🪐",
                "Be my shooting star? ⭐",
                "Lost in space without you! 🌌"
            ],
            successHeading: "Written In The Stars! ✨",
            successMessage: "Our love story spans galaxies! Ready for this cosmic adventure? 🌌💜",
            mainImage: 'https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif',
            successImage: 'https://media.giphy.com/media/3o7aCWJavAgtBzLOso/giphy.gif',
            socialLink: 'https://www.instagram.com/',
            confettiColors: ['#9d4edd', '#c77dff', '#e0aaff', '#7209b7', '#560bad'],
            confettiCount: 150
        }
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentTemplate = null;
let currentCustomizations = {};
let currentMode = 'quick';
let giphyCache = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderTemplates();
    loadFromLocalStorage();
});

function renderTemplates() {
    const grid = document.getElementById('templatesGrid');
    grid.innerHTML = templates.map(template => `
        <div class="template-card" onclick="selectTemplate('${template.id}')">
            <div class="template-preview" style="background-image: url('${template.thumbnail}')">
                <div class="template-badge">${template.category}</div>
                <div class="template-overlay">
                    <div class="template-info">
                        <h3>${template.name}</h3>
                        <p>${template.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// TEMPLATE SELECTION
// ============================================

function selectTemplate(templateId) {
    currentTemplate = templates.find(t => t.id === templateId);
    currentCustomizations = { ...currentTemplate.defaults };
    saveToLocalStorage();
    openEditor();
}

function startFromScratch() {
    currentTemplate = templates[0]; // Use first as base
    currentCustomizations = { ...templates[0].defaults };
    saveToLocalStorage();
    openEditor();
}

function scrollToTemplates() {
    document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// EDITOR FUNCTIONS
// ============================================

function openEditor() {
    document.getElementById('editorModal').classList.add('active');
    renderEditorControls();
    updatePreview();
}

function closeEditor() {
    document.getElementById('editorModal').classList.remove('active');
}

function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.mode-btn').classList.add('active');
    
    if (mode === 'quick') {
        document.getElementById('quickModeControls').style.display = 'block';
        document.getElementById('advancedModeControls').style.display = 'none';
    } else {
        document.getElementById('quickModeControls').style.display = 'none';
        document.getElementById('advancedModeControls').style.display = 'block';
    }
    
    renderEditorControls();
}

function renderEditorControls() {
    const quickControls = document.getElementById('quickModeControls');
    const advancedControls = document.getElementById('advancedModeControls');
    
    // Quick Mode Controls
    quickControls.innerHTML = `
        <div class="control-group">
            <label>Your Name</label>
            <input type="text" id="yourName" value="" placeholder="Enter your name" onchange="updateCustomization('yourName', this.value)">
        </div>
        
        <div class="control-group">
            <label>Their Name</label>
            <input type="text" id="theirName" value="" placeholder="Enter their name" onchange="updateCustomization('theirName', this.value)">
        </div>
        
        <div class="control-group">
            <label>Main Question</label>
            <input type="text" id="mainHeading" value="${currentCustomizations.mainHeading}" onchange="updateCustomization('mainHeading', this.value)">
        </div>
        
        <div class="control-group">
            <label>Background Color</label>
            <div class="color-picker-wrapper">
                <input type="color" id="bgColor" value="${currentCustomizations.bgColor}" onchange="updateCustomization('bgColor', this.value)">
                <input type="text" value="${currentCustomizations.bgColor}" readonly style="flex: 1;">
            </div>
        </div>
        
        <div class="control-group">
            <label>Button Color (Yes)</label>
            <div class="color-picker-wrapper">
                <input type="color" id="buttonYesColor" value="${currentCustomizations.buttonYesColor}" onchange="updateCustomization('buttonYesColor', this.value)">
                <input type="text" value="${currentCustomizations.buttonYesColor}" readonly style="flex: 1;">
            </div>
        </div>
        
        <div class="control-group">
            <label>Main Image (GIF or Photo)</label>
            <input type="url" id="mainImage" value="${currentCustomizations.mainImage}" placeholder="Paste image URL" onchange="updateCustomization('mainImage', this.value)">
            <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;" onclick="openGiphySearch('mainImage')">Search Giphy</button>
        </div>
        
        <div class="control-group">
            <label>Success Image</label>
            <input type="url" id="successImage" value="${currentCustomizations.successImage}" placeholder="Paste image URL" onchange="updateCustomization('successImage', this.value)">
            <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;" onclick="openGiphySearch('successImage')">Search Giphy</button>
        </div>
        
        <div class="control-group">
            <label>Success Message</label>
            <textarea id="successMessage" onchange="updateCustomization('successMessage', this.value)">${currentCustomizations.successMessage}</textarea>
        </div>
        
        <div class="control-group">
            <label>Social Media Link</label>
            <input type="url" id="socialLink" value="${currentCustomizations.socialLink}" placeholder="https://..." onchange="updateCustomization('socialLink', this.value)">
        </div>
    `;
    
    // Advanced Mode Controls (simplified for 24hr build)
    advancedControls.innerHTML = `
        <p style="color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Advanced mode includes all Quick Mode options plus:</p>
        
        ${quickControls.innerHTML}
        
        <div class="control-group">
            <label>Falling Shape</label>
            <input type="text" id="heartShape" value="${currentCustomizations.heartShape}" maxlength="2" onchange="updateCustomization('heartShape', this.value)" placeholder="❤️ 🌸 ⭐">
        </div>
        
        <div class="control-group">
            <label>Number of Falling Elements (${currentCustomizations.heartCount})</label>
            <input type="range" min="10" max="50" value="${currentCustomizations.heartCount}" oninput="updateCustomization('heartCount', this.value)" style="width: 100%;">
        </div>
        
        <div class="control-group">
            <label>Animation Speed</label>
            <select onchange="updateCustomization('heartSpeed', this.value)" style="width: 100%; padding: 0.9rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white;">
                <option value="slow" ${currentCustomizations.heartSpeed === 'slow' ? 'selected' : ''}>Slow</option>
                <option value="medium" ${currentCustomizations.heartSpeed === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="fast" ${currentCustomizations.heartSpeed === 'fast' ? 'selected' : ''}>Fast</option>
            </select>
        </div>
        
        <div class="control-group">
            <label>Confetti Amount (${currentCustomizations.confettiCount})</label>
            <input type="range" min="50" max="200" value="${currentCustomizations.confettiCount}" oninput="updateCustomization('confettiCount', this.value)" style="width: 100%;">
        </div>
    `;
}

function updateCustomization(key, value) {
    currentCustomizations[key] = value;
    saveToLocalStorage();
    updatePreview();
}

// ============================================
// GIPHY INTEGRATION
// ============================================

function openGiphySearch(targetField) {
    const query = prompt('Search Giphy (e.g., "cute cat", "love heart", "romantic"):');
    if (!query) return;
    
    searchGiphy(query, targetField);
}

async function searchGiphy(query, targetField) {
    const loading = document.getElementById('loading');
    loading.classList.add('active');
    
    try {
        // For MVP, using demo key - replace with actual key
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=# GIPHY_API_KEY

| Deploy context                  | Value                            |
| ------------------------------- | -------------------------------- |
| Production                      | nKHx6hxuatG8lLzhX9J8fO3DaQUpZjUD |
| Deploy Preview                  | nKHx6hxuatG8lLzhX9J8fO3DaQUpZjUD |
| Branch deploy                   | nKHx6hxuatG8lLzhX9J8fO3DaQUpZjUD |
| Local development (Netlify CLI) | nKHx6hxuatG8lLzhX9J8fO3DaQUpZjUD |&q=${encodeURIComponent(query)}&limit=10`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            // For now, just use first result - in full version, show picker
            const gifUrl = data.data[0].images.original.url;
            currentCustomizations[targetField] = gifUrl;
            document.getElementById(targetField).value = gifUrl;
            saveToLocalStorage();
            updatePreview();
            alert('GIF selected! Check the preview.');
        } else {
            alert('No GIFs found. Try a different search term.');
        }
    } catch (error) {
        console.error('Giphy error:', error);
        alert('Could not search Giphy. Using default image.');
    } finally {
        loading.classList.remove('active');
    }
}

// ============================================
// PREVIEW GENERATION
// ============================================

function updatePreview() {
    const iframe = document.getElementById('previewFrame');
    const html = generateHTML();
    
    iframe.srcdoc = html;
}

function generateHTML() {
    const c = currentCustomizations;
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will You Be My Valentine? 💕</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: ${c.bgGradient || c.bgColor};
            font-family: 'Arial', sans-serif;
            overflow-x: hidden;
            padding: 20px;
        }
        .container {
            text-align: center;
            animation: float 3s ease-in-out infinite;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }
        .step { display: none; }
        .step.active { display: block; }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .cat-img {
            width: 280px;
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
            filter: drop-shadow(0 0 10px rgba(255, 182, 229, 0.5));
            border-radius: 15px;
        }
        .hearts {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            top: 0;
            left: 0;
        }
        .heart {
            position: absolute;
            font-size: 20px;
            color: ${c.heartColor};
            animation: fall linear infinite;
        }
        @keyframes fall {
            to { transform: translateY(100vh); }
        }
        h1 {
            font-size: 2.5em;
            color: ${c.textColor};
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .buttons {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
            min-height: 80px;
            position: relative;
        }
        .btn {
            padding: 15px 40px;
            font-size: 1.2em;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            min-width: 160px;
            font-weight: bold;
        }
        .btn-yes {
            background: ${c.buttonYesColor};
            color: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .btn-yes:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .btn-no {
            background: ${c.buttonNoColor};
            color: #333;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .social-btn {
            display: none;
            padding: 15px 40px;
            background: ${c.buttonYesColor};
            color: white;
            text-decoration: none;
            border-radius: 25px;
            margin-top: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s;
            display: inline-block;
        }
        .social-btn:hover {
            transform: translateY(-3px);
        }
        .final-message {
            color: ${c.textColor};
            font-size: 1.5em;
            margin-top: 20px;
            animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @media (max-width: 768px) {
            h1 { font-size: 2em; }
            .cat-img { width: 220px; }
            .btn { padding: 12px 30px; font-size: 1.1em; }
        }
    </style>
</head>
<body>
    <div class="hearts" id="hearts"></div>
    <div class="container">
        <div class="step active" id="step1">
            <h1>${c.mainHeading}</h1>
            <img src="${c.mainImage}" alt="Image" class="cat-img" onerror="this.src='https://via.placeholder.com/280x280/ffecf2/ff1744?text=💕'">
            <div class="buttons">
                <button class="btn btn-yes" id="yesBtn" onclick="handleYes()">${c.buttonYesText}</button>
                <button class="btn btn-no" id="noBtn" onclick="handleNo()">${c.buttonNoText}</button>
            </div>
        </div>
        <div class="step" id="step2">
            <h1>${c.successHeading}</h1>
            <img src="${c.successImage}" alt="Success" class="cat-img" onerror="this.src='https://via.placeholder.com/280x280/ffecf2/ff1744?text=🎉'">
            <p class="final-message">${c.successMessage}</p>
            <a href="${c.socialLink}" class="social-btn">Message Me 💌</a>
        </div>
    </div>
    <script>
        let noCount = 0;
        const noMessages = ${JSON.stringify(c.noMessages)};
        
        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const speeds = { slow: 5, medium: 3, fast: 2 };
            const speed = speeds['${c.heartSpeed}'] || 3;
            
            for (let i = 0; i < ${c.heartCount}; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '${c.heartShape}';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * speed + speed) + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heartsContainer.appendChild(heart);
            }
        }
        
        function handleYes() {
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
            createConfetti();
        }
        
        function handleNo() {
            const noBtn = document.getElementById('noBtn');
            const yesBtn = document.getElementById('yesBtn');
            const h1 = document.querySelector('#step1 h1');
            
            noCount++;
            if (noCount <= noMessages.length) {
                h1.textContent = noMessages[noCount - 1];
            }
            
            const buttonsContainer = document.querySelector('.buttons');
            const containerRect = buttonsContainer.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();
            
            const maxX = containerRect.width - btnRect.width - 40;
            const maxY = 100;
            
            const randomX = Math.random() * maxX - 100;
            const randomY = Math.random() * maxY - 50;
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            
            const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
            yesBtn.style.fontSize = (currentSize + 2) + 'px';
        }
        
        function createConfetti() {
            const colors = ${JSON.stringify(c.confettiColors)};
            const confettiCount = ${c.confettiCount};
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.opacity = '1';
                confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.borderRadius = '50%';
                
                document.body.appendChild(confetti);
                
                const fallDuration = Math.random() * 3 + 2;
                const fallDistance = Math.random() * window.innerHeight + window.innerHeight;
                const swayDistance = (Math.random() - 0.5) * 200;
                
                confetti.animate([
                    { transform: \`translateY(0) translateX(0) rotate(0deg)\`, opacity: 1 },
                    { transform: \`translateY(\${fallDistance}px) translateX(\${swayDistance}px) rotate(\${Math.random() * 720}deg)\`, opacity: 0 }
                ], {
                    duration: fallDuration * 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                setTimeout(() => confetti.remove(), fallDuration * 1000);
            }
        }
        
        window.addEventListener('load', createHearts);
    </script>
</body>
</html>`;
}

// ============================================
// PAYMENT & DOWNLOAD
// ============================================

function initiatePayment() {
  // Save customizations before redirecting
    saveToLocalStorage();
    
    // Show message
    alert('💕 Redirecting to secure checkout!\n\nAfter payment:\n✅ You\'ll get instant download\n✅ Come back here anytime\n\nClick OK to continue to payment!');
    
    // Redirect to Gumroad - PASTE YOUR GUMROAD LINK HERE
    window.open('https://lihonway.gumroad.com/l/kiosx', '_blank'); 
    }


function processDownload() {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-valentine-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('✅ Downloaded!\n\nYour Valentine website is ready!\n\nUpload the HTML file to any web host or share it directly.\n\nThank you! 💕');
}

// ============================================
// LOCAL STORAGE (SAVE PROGRESS)
// ============================================

function saveToLocalStorage() {
    localStorage.setItem('valentine_builder', JSON.stringify({
        template: currentTemplate?.id,
        customizations: currentCustomizations,
        timestamp: Date.now()
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('valentine_builder');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.template) {
                currentTemplate = templates.find(t => t.id === data.template);
                currentCustomizations = data.customizations;
            }
        } catch (e) {
            console.error('Could not load saved data');
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Export functions to window for onclick handlers
window.scrollToTemplates = scrollToTemplates;
window.startFromScratch = startFromScratch;
window.selectTemplate = selectTemplate;
window.closeEditor = closeEditor;
window.switchMode = switchMode;
window.updateCustomization = updateCustomization;
window.openGiphySearch = openGiphySearch;
window.initiatePayment = initiatePayment;
