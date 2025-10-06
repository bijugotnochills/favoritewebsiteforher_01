// Website data
const websiteData = {
    title: "For Riya - A Special Journey",
    loadingQuotes: [
        "Creating something magical just for you...",
        "Your smile makes every moment special...",
        "You deserve all the wonderful things in life...",
        "Your presence lights up every room...",
        "You are stronger than you know...",
        "Your kindness touches everyone around you...",
        "This journey was made just for you, Riya..."
    ],
    sections: {
        onePiece: {
            title: "The Greatest Treasure",
            quote: "The world's greatest treasure isn't the One Piece at the end of the Grand Line. It's the way your eyes light up when you smile, Riya.",
            pickupLine: "You must be my One Piece, because I'd sail across all seas and face any challenge just to see you."
        },
        mlbb: {
            title: "Your Legendary Heroes",
            ling: {
                quote: "Like Ling gracefully dancing between enemy blades, you navigate through life's challenges with incredible elegance and strength.",
                pickupLine: "You've stolen my heart faster than Ling steals the turtle buff, and I don't want it back. (Might even give you my buff just to see you happy huhu 🥹)"
            },
            kagura: {
                quote: "As elegant and powerful as Kagura commanding her umbrella, you have this amazing presence that captivates everyone around you.",
                pickupLine: "You've got me more mesmerized than Kagura's hook combo, and I'm completely okay with that cause im hooked with just the way you are. ahhhhh 😭"
            },
            flameShot: {
                quote: "Just like how you perfectly time your Flame Shot to secure those satisfying kills, you've ignited something special in my heart.",
                pickupLine: "Your precision with Flame Shot is matched only by how precisely you've captured my attention. (Wont mind if you steal my kills 😉)"
            },
            thumbEmote: {
                quote: "That confident thumb-up emote after a great play is so you. Always knowing your worth and owning your amazing skills!",
                pickupLine: "If life had emotes, I'd be spamming the heart one every time I see you."
            }
        },
        favorites: {
            title: "Things That Make You Special",
            colors: {
                text: "Black for your mysterious elegance and purple for your creative spirit - your favorite colors perfectly reflect the beautiful complexity that is you."
            },
            flowers: {
                text: "The rose represents your passionate heart, the tulip your graceful elegance, and the daisy your cheerful, sunny disposition. Together they create the wonderful person you are."
            },
            song: {
                text: "'No One Noticed' by Marias reflects your depth perfectly - like this beautiful song, you have layers and beauty that reveal themselves to those who take the time to truly listen and understand."
            },
            iceCream: {
                text: "Classic, timeless, and always delightful. Your choice in ice cream mirrors your wonderful taste in everything. Simple pleasures that bring the most joy, just like you."
            }
        },
        final: {
            title: "For You, Riya",
            message: "Riya, you are an absolutely incredible person who brings so much light, laughter, and positivity into this world. Your confidence when you play your games, your beautiful smile that could brighten anyone's day, your unique perspective on things - all of these qualities combine to make you truly special. Never doubt your worth or your capabilities. You have this amazing strength within you that helps you overcome any challenge, and a kindness that touches everyone lucky enough to know you.",
            closingMessage: "This little interactive journey may end here, but remember that you'll always be someone worth celebrating, worth cherishing, and worth going the extra mile for. Keep shining with that brilliant smile, keep being the cool, confident person you are, and always remember how truly amazing you are. 💝"
        }
    }
};

class RiyaGiftWebsite {
    constructor() {
        this.currentSection = 0;
        this.sections = ['onePiece', 'mlbb', 'favorites', 'final'];
        this.noClickCount = 0;
        this.maxNoClicks = 10;
        this.loadingProgress = 0;
        this.quoteIndex = 0;
        this.data = websiteData;
        this.backgroundMusic = document.getElementById('backgroundMusic');
        
        this.init();
    }

    init() {
        this.startLoading();
        this.setupEventListeners();
        this.setupBackgroundMusic();
        this.createFloatingSparkles();
    }

    setupBackgroundMusic() {
        // Set initial volume to 0 for fade in
        this.backgroundMusic.volume = 0;
        
        // Try to play the music automatically
        const playPromise = this.backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Music started successfully, fade in
                this.fadeInMusic();
            }).catch(error => {
                // Autoplay was prevented, we'll try again after user interaction
                console.log("Autoplay prevented, will play after user interaction");
                document.getElementById('startBtn').addEventListener('click', () => {
                    this.backgroundMusic.play().then(() => {
                        this.fadeInMusic();
                    });
                });
            });
        }
    }

    fadeInMusic() {
        const fadeInInterval = setInterval(() => {
            if (this.backgroundMusic.volume < 0.7) {
                this.backgroundMusic.volume += 0.05;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 150);
    }

    fadeOutMusic() {
        const fadeOutInterval = setInterval(() => {
            if (this.backgroundMusic.volume > 0) {
                this.backgroundMusic.volume -= 0.05;
            } else {
                clearInterval(fadeOutInterval);
                this.backgroundMusic.pause();
            }
        }, 150);
    }

    createFloatingSparkles() {
        // This creates additional floating sparkles for extra visual appeal
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'floating-sparkles-extras';
        sparkleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        
        document.body.appendChild(sparkleContainer);
        
        // Create multiple sparkle elements
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                filter: blur(1px);
                animation: floatSparkle ${10 + Math.random() * 10}s linear infinite;
                opacity: ${0.3 + Math.random() * 0.5};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            // Add keyframes for this specific sparkle
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatSparkle {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                        opacity: ${0.3 + Math.random() * 0.5};
                    }
                    50% {
                        opacity: ${0.7 + Math.random() * 0.3};
                    }
                    100% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
                        opacity: ${0.3 + Math.random() * 0.5};
                    }
                }
            `;
            document.head.appendChild(style);
            
            sparkleContainer.appendChild(sparkle);
        }
    }

    startLoading() {
        const progressCircle = document.querySelector('.progress-ring-circle');
        const circumference = 2 * Math.PI * 52;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        
        // Calculate total loading time based on quotes (7 quotes × 2 seconds each = 14 seconds)
        const totalLoadingTime = this.data.loadingQuotes.length * 2000; // 14 seconds
        const updateInterval = 50; // Update every 50ms for smooth progress
        const totalUpdates = totalLoadingTime / updateInterval;
        const progressIncrement = 100 / totalUpdates;
        
        const loadingInterval = setInterval(() => {
            this.loadingProgress += progressIncrement;
            const offset = circumference - (this.loadingProgress / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
            
            document.querySelector('.loading-percentage').textContent = `${Math.min(Math.round(this.loadingProgress), 100)}%`;
            
            if (this.loadingProgress >= 100) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    this.hideLoadingScreen();
                }, 3000);
            }
        }, updateInterval);

        this.startQuoteCycle();
    }

    startQuoteCycle() {
        const quoteElement = document.getElementById('loadingQuote');
        let quoteInterval = setInterval(() => {
            if (this.quoteIndex < this.data.loadingQuotes.length) {
                quoteElement.style.opacity = '0';
                setTimeout(() => {
                    quoteElement.textContent = this.data.loadingQuotes[this.quoteIndex];
                    quoteElement.style.opacity = '1';
                    this.quoteIndex++;
                }, 500); // Fade out transition
            } else {
                clearInterval(quoteInterval);
            }
        }, 2000); // Each quote displays for 2 seconds (1.5 seconds visible + 0.5s fade)
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const introScreen = document.getElementById('introScreen');
        
        loadingScreen.classList.remove('active');
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            introScreen.classList.remove('hidden');
            introScreen.classList.add('active');
            
            setTimeout(() => {
                document.getElementById('startBtn').classList.remove('hidden');
            }, 5000);
        }, 800);
    }

    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.hideIntroScreen();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.showConfirmation();
        });

        document.getElementById('yesBtn').addEventListener('click', () => {
            this.proceedToNextSection();
        });

        document.getElementById('noBtn').addEventListener('click', (e) => {
            this.handleNoClick(e);
        });

        // Fade out music when leaving the page
        window.addEventListener('beforeunload', () => {
            this.fadeOutMusic();
        });
    }

    hideIntroScreen() {
        const introScreen = document.getElementById('introScreen');
        const mainContent = document.getElementById('mainContent');
        const navigation = document.getElementById('navigation');
        
        introScreen.classList.remove('active');
        setTimeout(() => {
            introScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            navigation.classList.remove('hidden');
            this.showSection(0);
        }, 800);
    }

    showSection(sectionIndex) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active', 'hidden');
            section.classList.add('hidden');
        });

        // Hide next button and confirmation
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('confirmation').classList.add('hidden');

        // Reset MLBB cards
        if (sectionIndex === 1) {
            this.resetMLBBCards();
        }

        // Reset favorites cards
        if (sectionIndex === 2) {
            this.resetFavoritesCards();
        }

        // Show current section
        const currentSection = document.getElementById(`${this.sections[sectionIndex]}Section`);
        currentSection.classList.remove('hidden');
        
        setTimeout(() => {
            currentSection.classList.add('active');
            this.populateSectionContent(sectionIndex);
            
            // Show next button after delay
            setTimeout(() => {
                if (sectionIndex < this.sections.length - 1) {
                    document.getElementById('nextBtn').classList.remove('hidden');
                }
            }, 5000);
        }, 100);
    }

    resetMLBBCards() {
        const mlbbCards = ['lingCard', 'kaguraCard', 'flameShotCard', 'thumbEmoteCard'];
        mlbbCards.forEach(card => {
            document.getElementById(card).classList.remove('active');
            document.getElementById(card).classList.add('hidden');
        });
    }

    resetFavoritesCards() {
        const favoritesCards = ['colorsCard', 'flowersCard', 'songCard', 'iceCreamCard'];
        favoritesCards.forEach(card => {
            document.getElementById(card).classList.remove('active');
            document.getElementById(card).classList.add('hidden');
        });
    }

    populateSectionContent(sectionIndex) {
        const sectionKey = this.sections[sectionIndex];
        const sectionData = this.data.sections[sectionKey];
        
        switch(sectionKey) {
            case 'onePiece':
                this.populateOnePiece(sectionData);
                break;
            case 'mlbb':
                this.populateMLBB(sectionData);
                break;
            case 'favorites':
                this.populateFavorites(sectionData);
                break;
            case 'final':
                this.populateFinal(sectionData);
                break;
        }
    }

    populateOnePiece(data) {
        document.getElementById('onePieceQuote').textContent = data.quote;
        document.getElementById('onePiecePickup').textContent = data.pickupLine;
    }

    populateMLBB(data) {
        // Populate Ling
        document.getElementById('lingQuote').textContent = data.ling.quote;
        document.getElementById('lingPickup').textContent = data.ling.pickupLine;
        
        // Populate Kagura
        document.getElementById('kaguraQuote').textContent = data.kagura.quote;
        document.getElementById('kaguraPickup').textContent = data.kagura.pickupLine;
        
        // Populate Flame Shot
        document.getElementById('flameShotText').textContent = data.flameShot.quote;
        document.getElementById('flameShotPickup').textContent = data.flameShot.pickupLine;
        
        // Populate Thumb Emote
        document.getElementById('thumbEmoteText').textContent = data.thumbEmote.quote;
        document.getElementById('thumbEmotePickup').textContent = data.thumbEmote.pickupLine;
        
        // Animate elements in sequence
        setTimeout(() => {
            document.getElementById('lingCard').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('lingCard').classList.add('active');
            }, 100);
        }, 1000);
        
        setTimeout(() => {
            document.getElementById('kaguraCard').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('kaguraCard').classList.add('active');
            }, 100);
        }, 2000);
        
        setTimeout(() => {
            document.getElementById('flameShotCard').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('flameShotCard').classList.add('active');
            }, 100);
        }, 3000);
        
        setTimeout(() => {
            document.getElementById('thumbEmoteCard').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('thumbEmoteCard').classList.add('active');
            }, 100);
        }, 4000);
    }

    populateFavorites(data) {
        const cards = [
            { id: 'colorsCard', textId: 'colorsText', data: data.colors },
            { id: 'flowersCard', textId: 'flowersText', data: data.flowers },
            { id: 'songCard', textId: 'songText', data: data.song },
            { id: 'iceCreamCard', textId: 'iceCreamText', data: data.iceCream }
        ];
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                const cardElement = document.getElementById(card.id);
                const textElement = document.getElementById(card.textId);
                
                textElement.textContent = card.data.text;
                cardElement.classList.remove('hidden');
                setTimeout(() => {
                    cardElement.classList.add('active');
                }, 100);
            }, index * 800);
        });
    }

    populateFinal(data) {
        document.getElementById('finalMessage').textContent = data.message;
        document.getElementById('closingMessage').textContent = data.closingMessage;
    }

    showConfirmation() {
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
        document.getElementById('errorMessage').classList.add('hidden');
        this.noClickCount = 0;
        
        // Reset No button position and make it visible
        const noBtn = document.getElementById('noBtn');
        // noBtn.style.display = 'block';
        this.resetNoButtonPosition();
    }

    resetNoButtonPosition() {
        const noBtn = document.getElementById('noBtn');
        // Reset to center position
        // noBtn.style.left = '50%';
        // noBtn.style.top = '50%';
        // noBtn.style.transform = 'translate(-50%, -50%)';
    }

    handleNoClick(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        this.noClickCount++;
        const noBtn = e.target;
        const errorMessage = document.getElementById('errorMessage');
        const messages = [
            "Come on 😅",
            "Esto ta haina holaaaaa! 🙄",
            "Pretty please? 🥺",
            "You know you want to ahemm i mean ahemmm arent you curiossssssssssss! 🫨",
            "Just click Yes already! 😭",
            "I'm still gonna chase until you click that yes! 😏",
            "Your persistence is admirable! But nuh uhhh you gotta click yes hmmmph 😜",
            "Okay, you win... but not until you click Yes! 🤣",
            "I see you're having fun! But you know it would be more fun if you clicked yes huhu 😉",
            "NUH UH ABRACADABRA THE NO BUTTON DISAPPEARS aba ta Yes bhannai parcha! 😈"
        ];

        // Show error message
        errorMessage.textContent = messages[Math.min(this.noClickCount - 1, messages.length - 1)];
        errorMessage.classList.remove('hidden');

        if (this.noClickCount >= this.maxNoClicks) {
            noBtn.style.display = 'none';
            return;
        }

        // Move only the No button within the confirmation buttons container
        this.moveNoButtonRandomly(noBtn);
    }

    moveNoButtonRandomly(button) {
        const confirmationButtons = document.querySelector('.confirmation-buttons');
        const buttonsRect = confirmationButtons.getBoundingClientRect();
        
        // Calculate safe movement area (smaller than container to keep button visible)
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        
        // Use smaller movement range to prevent overflow
        const maxX = buttonsRect.width - buttonWidth - 10;
        const maxY = buttonsRect.height - buttonHeight - 10;
        
        // Generate random positions within safe bounds
        const randomX = Math.max(0, Math.min(maxX, Math.random() * maxX));
        const randomY = Math.max(0, Math.min(maxY, Math.random() * maxY));
        
        // Position the button relative to the confirmation buttons container
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
        button.style.transform = 'none'; // Remove the centering transform
    }

    proceedToNextSection() {
        document.getElementById('confirmation').classList.add('hidden');
        document.getElementById('errorMessage').classList.add('hidden');
        this.currentSection++;
        
        if (this.currentSection < this.sections.length) {
            this.showSection(this.currentSection);
        } else {
            // End of journey
            this.showEndMessage();
        }
    }

    showEndMessage() {
        // Create a beautiful ending message in the DOM
        const finalSection = document.getElementById('finalSection');
        const endingMessage = document.createElement('div');
        endingMessage.className = 'ending-message';
        endingMessage.innerHTML = `
            <div class="fireworks">
                <div class="firework"></div>
                <div class="firework"></div>
                <div class="firework"></div>
            </div>
            <h2>Thank You for This Journey!</h2>
            <p>I hope this brought a smile to your face, Riya. You deserve all the happiness in the world! 💝</p>
            <p class="console-message">Check the browser console for a special message! (Press F12)</p>
        `;
        
        setTimeout(() => {
            finalSection.appendChild(endingMessage);
            
            // Show message in browser console
            console.log(`%c
╔═══════════════════════════════════════════════╗
║                                               ║
║   Thank you for experiencing this journey!    ║
║                                               ║
║   Riya, you are an incredible person who      ║
║   brings so much light into this world.       ║
║   Never forget how amazing you are! 💝        ║
║                                               ║
║   This website was made with lots of love     ║
║   and care just for you.                      ║
║                                               ║
╚═══════════════════════════════════════════════╝
        `, "color: #bb86fc; font-size: 14px; font-weight: bold;");
        
        console.log("%cYou're special, Riya! Keep shining! ✨", "color: #985eff; font-size: 16px; font-style: italic;");
        
        // Show visible prompt after 10 seconds
        setTimeout(() => {
            this.showCompletionPrompt();
        }, 10000);
        
        }, 2000);
    }

    showCompletionPrompt() {
        // Create a beautiful completion prompt
        const promptOverlay = document.createElement('div');
        promptOverlay.className = 'completion-prompt-overlay';
        promptOverlay.innerHTML = `
            <div class="completion-prompt">
                <div class="prompt-icon">🎉</div>
                <h3>Journey Complete!</h3>
                <p>Thank you for experiencing this special journey made just for you, Riya!</p>
                <p>You are an amazing person who deserves all the happiness in the world. 💝</p>
                <div class="prompt-buttons">
                    <button id="closePrompt" class="btn">Close</button>
                    <button id="restartJourney" class="btn">Experience Again</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(promptOverlay);
        
        // Add event listeners
        document.getElementById('closePrompt').addEventListener('click', () => {
            document.body.removeChild(promptOverlay);
        });
        
        document.getElementById('restartJourney').addEventListener('click', () => {
            document.body.removeChild(promptOverlay);
            this.restartJourney();
        });
    }

    restartJourney() {
        // Reset everything and restart from beginning
        this.currentSection = 0;
        this.noClickCount = 0;
        this.loadingProgress = 0;
        this.quoteIndex = 0;
        
        // Hide main content and show loading screen
        document.getElementById('mainContent').classList.add('hidden');
        document.getElementById('navigation').classList.add('hidden');
        
        // Remove any existing ending message
        const endingMessage = document.querySelector('.ending-message');
        if (endingMessage) {
            endingMessage.remove();
        }
        
        // Show loading screen
        const loadingScreen = document.getElementById('loadingScreen');
        const introScreen = document.getElementById('introScreen');
        
        loadingScreen.classList.remove('hidden');
        loadingScreen.classList.add('active');
        introScreen.classList.add('hidden');
        introScreen.classList.remove('active');
        
        // Reset progress circle
        const progressCircle = document.querySelector('.progress-ring-circle');
        const circumference = 2 * Math.PI * 52;
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        
        // Restart the journey
        this.startLoading();
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new RiyaGiftWebsite();
});