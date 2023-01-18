//TODO maybe add "new" tags

export function getCategories() {
    const categories = {
    'Graphics & Design' : [
        [
            "Logo & Brand Identity",
            "Logo Design",
            "Brand Style Guides",
            "Fonts & Typography",
            "Business Cards & Stationery"
        ], [
            "Web & App Design",
            "Website Design",
            "App Design",
            "UX Design",
            "Landing Page Design",
            "Icon Design"
        ],
        [
            "Art & Illustration",
            "Illustration",
            "NFT Art",
            "Pattern Design",
            "Portraits & Caricatures",
            "Cartoons & Comics",
            "Tattoo Design",
            "Storyboards"
        ],
        [
            "Marketing Design",
            "Social Media Design",
            "Email Design",
            "Web Banners",
            "Signage Design"
        ],
        [
            "Gaming",
            "Game Art",
            "Graphics for Streamers",
            "Twitch Store"
        ],
        [
            "Visual Design",
            "Image Editing",
            "Presentation Design",
            "Infographic Design",
            "Vector Tracing",
            "Resume Design"
        ],
        [
            "Print Design",
            "Flyer Design",
            "Brochure Design",
            "Poster Design",
            "Catalog Design",
            "Menu Design",
            "Invitation Design"
        ],
        [
            "Packaging & Covers",
            "Packaging & Label Design",
            "Book Design",
            "Album Cover Design",
            "Podcast Cover Art",
            "Car Wraps"
        ],
        [
            "Architecture & Building Design",
            "Architecture & Interior Design",
            "Landscape Design",
            "Building Engineering",
            "Building Information Modeling"
        ],
        [
            "Product & Characters Design",
            "Industrial & Product Design",
            "Character Modeling",
            "Trade Booth Design"
        ],
        [
            "Fashion & Merchandise",
            "Fashion Design",
            "T-Shirts & Merchandise",
            "Jewelry Design"
        ],
        [
            "Miscellaneous",
            "Design Advice",
            "Logo Maker Tool"

        ]


    ],
    'Digital Marketing' : [
        [
            "Search",
            "Search Engine Optimization (SEO)",
            "Local SEO"
        ],
        [
            "Social",
            "Social Media Marketing",
            "Influencer Marketing",
            "Community Management"
        ],
        [
            "Advertising",
            "Social Media Advertising",
            "Search Engine Marketing (SEM)",
            "Display Advertising"
        ],
        [
            "Content",
            "Public Relations",
            "Guest Posting",
            "Video Marketing",
            "Email Marketing",
            "Text Message Marketing",
            "Affiliate Marketing"
        ],
        [
            "Industry & Purpose-specific",
            "E-Commerce Marketing",
            "Mobile App Marketing",
            "Book & eBook Marketing",
            "Music Promotion",
            "Podcast Marketing",
            "Crowdfunding"

        ],
        [
            "Analytics & Strategy",
            "Marketing Strategy",
            "Marketing Advice",
            "Web Analytics"
        ]

    ],
    'Writing & Translation' : [
        [
            "Content Writing & Editing",
            "Articles & Blog Posts",
            "Proofreading & Editing",
            "Website Content",
            "UX Writing",
            "Book & eBook Writing",
            "Book Editing",
            "Creative Writing",
            "Beta Reading",
            "Technical Writing"
        ],
        [
            "Career Writing",
            "Resume Writing",
            "Cover Letters",
            "LinkedIn Profiles"
        ],
        [
            "Storytelling",
            "Speechwriting",
            "Scriptwriting",
            "Podcast Writing"
        ],
        [
            "Business Copy",
            "Brand Voice & Tone",
            "Business Names & Slogans",
            "Case Studies",
            "White Papers",
            "Grant Writing",
            "Product Descriptions",
            "Job Descriptions"
        ],
        [
            "Translation & Transcription",
            "Translation",
            "Transcription"
        ],
        [
            "Sales & Marketing Copy",
            "Ad Copy",
            "Email Copy",
            "Sales Copy",
            "Social Media Copy",
            "Press Releases"
        ],
        [
            "Miscellaneous",
            "eLearning Content Development",
            "Research & Summaries",
            "Writing Advice",
            "Other"
        ]

    ],
    'Video & Animation' : [
        [
            "Editing & Post-Production",
            "Video Editing",
            "Visual Effects",
            "Intro & Outro Videos",
            "Video Templates Editing",
            "Subtitles & Captions",
            "Rigging"
        ],
        [
            "Animation",
            "Character Animation",
            "Animated Explainers",
            "Logo Animation",
            "Animated GIFs",
            "Lottie & Web Animation",
            "NFT Animation",
            "Animation for Streamers",
            "Animation for Kids"
        ],
        [
            "Social & Marketing Videos",
            "Video Ads & Commercials",
            "Social Media Videos",
            "Spokesperson Videos",
            "Music Videos",
            "Slideshow Videos",
            "Corporate Videos",
            "Meditation Videos",
            "Real Estate Promos"
        ],
        [
            "Product & Explainer Videos",
            "3D Product Animation",
            "E-Commerce Product Videos",
            "Live Action Explainers",
            "App & Website Previews",
            "Unboxing Videos",
            "Crowdfunding Videos",
            "Book Trailers",
            "Game Trailers"
        ],
        [
            "Tutorials & Education",
            "eLearning Video Production",
            "Screencasting Videos",
            "Video Advice"
        ],
        [
            "Miscellaneous",
            "Article to Video",
            "Videographers",
            "Filmed Video Production",
            "Other"
        ]
    ],
    'Music & Audio' : [
        [
            "Music Production & Writing",
            "Producers & Composers",
            "Songwriters",
            "Beat Making",
            "Singers & Vocalists",
            "Session Musicians",
            "Jingles & Intros"
        ],
        [
            "Audio Engineering & Post Production",
            "Mixing & Mastering",
            "Audio Editing",
            "Vocal Tuning",
            "Audio Logo & Sonic Branding"
        ],
        [
            "Voice Over & Streaming",
            "Voice Over",
            "Podcast Production",
            "Audiobook Production",
            "Audio Ads Production"
        ],
        [
            "Lessons & Transcription",
            "Online Music Lessons",
            "Music Transcription",
            "Music & Audio Advice"
        ], [
            "DJing",
            "Remixing & Mashups",
            "DJ Drops & Tags",
            "DJ Mixing"
        ],
        [
            "Sound Design",
            "Sound Design",
            "Sound Design",
            "Synth Presets",
            "Meditation Music"
        ]

    ],
    'Programming & Tech' : [
        [
            "Websites",
            "Website Development",
            "Website Maintenance",
            "Business Websites",
            "E-Commerce Development",
            "Landing Pages"
        ],
        [
            "Website Platforms",
            "WordPress",
            "Shopify",
            "Wix",
            "Webflow",
            "Custom Websites"
        ], [
            "Application Development",
            "Mobile Apps",
            "Web Programming",
            "Desktop Applications",
            "Game Development",
            "AI Applications",
            "Chatbots"
        ],
        [
            "Support & Cybersecurity",
            "Support & IT",
            "DevOps & Cloud",
            "Cybersecurity & Data Protection",
            "Development for Streamers",
            "Convert Files"
        ],
        [
            "Miscellaneous",
            "Blockchain & Cryptocurrency",
            "Electronics Engineering",
            "QA & Review",
            "NFT Development",
            "User Testing",
            "Online Coding Lessons",
            "Other"
        ]
    ],
    'Business' : [
        [
            "Business",
            "Business Plans",
            "Business Consulting",
            "Market Research",
            "Presentations"
        ],
        [
            "General and Administrative",
            "Virtual Assistant",
            "E-Commerce Management",
            "Financial Consulting",
            "Legal Consulting",
            "HR Consulting",
            "Project Management",
            "Supply Chain Management",
            "ERP Management",
            "Event Management"
        ],
        [
            "Sales & Customer Care",
            "Sales",
            "Customer Care",
            "CRM Management"
        ],
        [
            "Miscellaneous",
"Fact Checking",
"Game Concept Design",
"Other"
        ]
    ]
}
return categories
}