//TODO maybe add "new" tags

export function getCategories() {
    const categories = {
        'Graphics and Design': [
            [
                "Logo and Brand Identity",
                "Logo Design",
                "Brand Style Guides",
                "Fonts and Typography",
                "Business Cards and Stationery"
            ], [
                "Web and App Design",
                "Website Design",
                "App Design",
                "UX Design",
                "Landing Page Design",
                "Icon Design"
            ],
            [
                "Art and Illustration",
                "Illustration",
                "NFT Art",
                "Pattern Design",
                "Portraits and Caricatures",
                "Cartoons and Comics",
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
                "Packaging and Covers",
                "Packaging and Label Design",
                "Book Design",
                "Album Cover Design",
                "Podcast Cover Art",
                "Car Wraps"
            ],
            [
                "Architecture and Building Design",
                "Architecture and Interior Design",
                "Landscape Design",
                "Building Engineering",
                "Building Information Modeling"
            ],
            [
                "Product and Characters Design",
                "Industrial and Product Design",
                "Character Modeling",
                "Trade Booth Design"
            ],
            [
                "Fashion and Merchandise",
                "Fashion Design",
                "T-Shirts and Merchandise",
                "Jewelry Design"
            ],
            [
                "Miscellaneous",
                "Design Advice",
                "Logo Maker Tool"

            ]


        ],
        'Digital Marketing': [
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
                "Industry and Purpose-specific",
                "E-Commerce Marketing",
                "Mobile App Marketing",
                "Book and eBook Marketing",
                "Music Promotion",
                "Podcast Marketing",
                "Crowdfunding"

            ],
            [
                "Analytics and Strategy",
                "Marketing Strategy",
                "Marketing Advice",
                "Web Analytics"
            ]

        ],
        'Writing and Translation': [
            [
                "Content Writing and Editing",
                "Articles and Blog Posts",
                "Proofreading and Editing",
                "Website Content",
                "UX Writing",
                "Book and eBook Writing",
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
                "Brand Voice and Tone",
                "Business Names and Slogans",
                "Case Studies",
                "White Papers",
                "Grant Writing",
                "Product Descriptions",
                "Job Descriptions"
            ],
            [
                "Translation and Transcription",
                "Translation",
                "Transcription"
            ],
            [
                "Sales and Marketing Copy",
                "Ad Copy",
                "Email Copy",
                "Sales Copy",
                "Social Media Copy",
                "Press Releases"
            ],
            [
                "Miscellaneous",
                "eLearning Content Development",
                "Research and Summaries",
                "Writing Advice",
                "Other"
            ]

        ],
        'Video and Animation': [
            [
                "Editing and Post-Production",
                "Video Editing",
                "Visual Effects",
                "Intro and Outro Videos",
                "Video Templates Editing",
                "Subtitles and Captions",
                "Rigging"
            ],
            [
                "Animation",
                "Character Animation",
                "Animated Explainers",
                "Logo Animation",
                "Animated GIFs",
                "Lottie and Web Animation",
                "NFT Animation",
                "Animation for Streamers",
                "Animation for Kids"
            ],
            [
                "Social and Marketing Videos",
                "Video Ads and Commercials",
                "Social Media Videos",
                "Spokesperson Videos",
                "Music Videos",
                "Slideshow Videos",
                "Corporate Videos",
                "Meditation Videos",
                "Real Estate Promos"
            ],
            [
                "Product and Explainer Videos",
                "3D Product Animation",
                "E-Commerce Product Videos",
                "Live Action Explainers",
                "App and Website Previews",
                "Unboxing Videos",
                "Crowdfunding Videos",
                "Book Trailers",
                "Game Trailers"
            ],
            [
                "Tutorials and Education",
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
        'Music and Audio': [
            [
                "Music Production and Writing",
                "Producers and Composers",
                "Songwriters",
                "Beat Making",
                "Singers and Vocalists",
                "Session Musicians",
                "Jingles and Intros"
            ],
            [
                "Audio Engineering and Post Production",
                "Mixing and Mastering",
                "Audio Editing",
                "Vocal Tuning",
                "Audio Logo and Sonic Branding"
            ],
            [
                "Voice Over and Streaming",
                "Voice Over",
                "Podcast Production",
                "Audiobook Production",
                "Audio Ads Production"
            ],
            [
                "Lessons and Transcription",
                "Online Music Lessons",
                "Music Transcription",
                "Music and Audio Advice"
            ], [
                "DJing",
                "Remixing and Mashups",
                "DJ Drops and Tags",
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
        'Programming and Tech': [
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
                "Support and Cybersecurity",
                "Support and IT",
                "DevOps and Cloud",
                "Cybersecurity and Data Protection",
                "Development for Streamers",
                "Convert Files"
            ],
            [
                "Miscellaneous",
                "Blockchain and Cryptocurrency",
                "Electronics Engineering",
                "QA and Review",
                "NFT Development",
                "User Testing",
                "Online Coding Lessons",
                "Other"
            ]
        ],
        'Business': [
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
                "Sales and Customer Care",
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
        ],
        'Lifestyle': [

        ]
        ,
        'Trending': [

        ]
    }
    return categories
}