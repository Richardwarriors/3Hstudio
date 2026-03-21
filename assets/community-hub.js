(function () {
  const STORAGE_KEYS = {
    users: "3h-community-users",
    currentUser: "3h-community-current-user",
    postsPrefix: "3h-community-posts-"
  };

  const UI = {
    zh: {
      navHome: "首页",
      navBooking: "立即预约",
      navContact: "联系我们",
      navLanguage: "EN",
      postStat: "分享帖子",
      creatorStat: "摄影师",
      interactionStat: "互动总量",
      authTitle: "加入场景社区",
      authIntro: "摄影师和用户都可以在这里建立身份、分享图片、视频与交流灵感，让每个场景形成更真实、更持续的内容氛围。",
      currentIdentity: "当前身份",
      logout: "退出身份",
      registerAction: "注册 / 切换身份",
      registerNote: "登记后即可发布帖子、评论并参与互动。",
      nameLabel: "昵称",
      namePlaceholder: "例如：林同学 / Emma",
      roleLabel: "身份",
      rolePhotographer: "摄影师",
      roleUser: "用户",
      cityLabel: "城市",
      cityPlaceholder: "例如：纽约 / 上海 / 洛杉矶",
      authSuccess: "身份已更新，现在可以开始分享照片和参与互动。",
      authLogout: "当前身份已退出。",
      composerTitle: "发布你的内容",
      composerIntro: "上传多张作品、返图、短视频或灵感素材，把真实的拍摄故事、生活片段和审美参考留在这个场景社区。",
      titleLabel: "帖子标题",
      titlePlaceholder: "给这组内容起一个标题",
      captionLabel: "分享内容",
      captionPlaceholder: "写下你的拍摄故事、风格想法、地点信息或合作背景。",
      tagsLabel: "标签",
      tagsPlaceholder: "例如：纽约, 毕业, 胶片感",
      mediaUrlLabel: "媒体链接",
      mediaUrlPlaceholder: "可选：每行粘贴一条图片或视频 URL",
      mediaUrlHelp: "支持补充多条外链图片或视频，建议一行一条，方便帖子更完整地表达内容。",
      fileLabel: "上传图片 / 视频",
      fileHelp: "支持多张图片与短视频一起发布，让帖子更完整、更有现场感。",
      publishAction: "发布帖子",
      publishNeedIdentity: "请先登记身份，再发布内容。",
      publishNeedImage: "请至少上传一项图片或视频内容，或填写媒体链接后再发布。",
      publishSuccess: "帖子已经发布到当前场景社区。",
      publishError: "媒体处理失败了，请换一个文件、压缩视频，或使用媒体链接重试。",
      publishTooLarge: "内容体积较大，暂时发布失败，请压缩视频或改用媒体链接。",
      toolbarTitle: "分享动态",
      filterAll: "全部内容",
      filterPhotographer: "摄影师分享",
      filterUser: "用户分享",
      emptyTitle: "当前筛选下还没有内容",
      emptyCopy: "你可以先切换筛选，或者直接注册身份后发布第一条多媒体帖子。",
      reactions: {
        like: "点赞",
        favorite: "收藏",
        love: "喜爱",
        dislike: "拉踩"
      },
      commentsTitle: "评论",
      commentPlaceholder: "写下你的想法、建议或反馈",
      commentAction: "发布评论",
      commentNeedIdentity: "请先登记身份再评论。",
      commentNeedText: "评论内容不能为空。",
      commentSuccess: "评论已发布。",
      deletePost: "删除帖子",
      deleteComment: "删除评论",
      deletePostConfirm: "确定要删除这条帖子吗？删除后将无法恢复。",
      deleteCommentConfirm: "确定要删除这条评论吗？删除后将无法恢复。",
      guideTitle: "分享建议",
      guideItems: [
        "摄影师适合分享作品、风格样张、拍摄地点与合作故事",
        "用户适合发布返图、灵感参考和真实体验反馈",
        "当你已经明确时间、地点与需求时，也可以直接进入预约页继续沟通"
      ],
      footerNote: "3H-Studio 场景社区欢迎摄影师与用户共同分享作品、灵感与真实反馈。",
      openBooking: "前往预约页",
      registerPrompt: "先登记身份，即可开启发帖与互动。",
      fileSelected: "已选择媒体：",
      timeJustNow: "刚刚",
      by: "来自"
    },
    en: {
      navHome: "Home",
      navBooking: "Book Now",
      navContact: "Contact",
      navLanguage: "中文",
      postStat: "Shared Posts",
      creatorStat: "Photographers",
      interactionStat: "Interactions",
      authTitle: "Join the Scene Community",
      authIntro: "Photographers and users can build an identity here, share images, videos, and ideas so each category feels more alive, social, and inspiring.",
      currentIdentity: "Current identity",
      logout: "Sign Out",
      registerAction: "Register / Switch Identity",
      registerNote: "After registering, you can publish posts, comment, and interact with the feed.",
      nameLabel: "Display name",
      namePlaceholder: "e.g. Emma / Alex",
      roleLabel: "Role",
      rolePhotographer: "Photographer",
      roleUser: "User",
      cityLabel: "City",
      cityPlaceholder: "e.g. New York / Shanghai / Los Angeles",
      authSuccess: "Identity updated. You can now share photos and join the conversation.",
      authLogout: "The current identity has been signed out.",
      composerTitle: "Publish Your Media",
      composerIntro: "Share multiple finished images, short videos, return assets, or inspiration references so the feed feels grounded in real stories, daily moments, and visual taste.",
      titleLabel: "Post title",
      titlePlaceholder: "Give this post a title",
      captionLabel: "Post copy",
      captionPlaceholder: "Share the story behind the images, style direction, location, or collaboration context.",
      tagsLabel: "Tags",
      tagsPlaceholder: "e.g. New York, graduation, film mood",
      mediaUrlLabel: "Media URLs",
      mediaUrlPlaceholder: "Optional: paste one image or video URL per line",
      mediaUrlHelp: "You can add multiple hosted images or videos here. One URL per line works best.",
      fileLabel: "Upload Images / Videos",
      fileHelp: "Supports multi-image posts and short video clips so each post feels richer and more immersive.",
      publishAction: "Publish Post",
      publishNeedIdentity: "Register an identity before publishing.",
      publishNeedImage: "Please upload at least one image or video, or paste media URLs before publishing.",
      publishSuccess: "The post has been published in this scene community.",
      publishError: "Media processing failed. Please try another file, compress the video, or use hosted media URLs instead.",
      publishTooLarge: "This post is too large to publish right now. Please compress the video or switch to hosted media URLs.",
      toolbarTitle: "Community Feed",
      filterAll: "All Posts",
      filterPhotographer: "Photographer Posts",
      filterUser: "User Posts",
      emptyTitle: "No posts match this filter yet",
      emptyCopy: "Try another filter, or register an identity and publish the first media post.",
      reactions: {
        like: "Like",
        favorite: "Favorite",
        love: "Love",
        dislike: "Dislike"
      },
      commentsTitle: "Comments",
      commentPlaceholder: "Share your thoughts, feedback, or suggestions",
      commentAction: "Post Comment",
      commentNeedIdentity: "Register an identity before commenting.",
      commentNeedText: "The comment cannot be empty.",
      commentSuccess: "Comment posted.",
      deletePost: "Delete Post",
      deleteComment: "Delete Comment",
      deletePostConfirm: "Are you sure you want to delete this post? This cannot be undone.",
      deleteCommentConfirm: "Are you sure you want to delete this comment? This cannot be undone.",
      guideTitle: "Sharing Tips",
      guideItems: [
        "Photographers can share finished work, style samples, locations, and collaboration stories",
        "Users can post delivered images, inspiration references, and real feedback",
        "If your request is already clear, you can head to the booking page to continue the conversation"
      ],
      footerNote: "3H-Studio scene communities are built to help photographers and users share work, references, and authentic feedback together.",
      openBooking: "Go to Booking",
      registerPrompt: "Register an identity first to unlock posting and interactions.",
      fileSelected: "Selected media:",
      timeJustNow: "Just now",
      by: "From"
    }
  };

  const SCENES = {
    travel: {
      theme: {
        accent: "#295f6b",
        accentStrong: "#224f58",
        wash: "rgba(41, 95, 107, 0.1)",
        glow: "rgba(99, 173, 190, 0.16)"
      },
      heroImage: "assets/picture6.jpg",
      pages: {
        zh: {
          eyebrow: "旅拍场景社区",
          title: "旅拍与目的地影像分享页",
          description: "这里聚合城市漫游、目的地写真与户外故事影像。摄影师和用户都可以在这里发布图片、视频、互动评论，并为真实作品建立更活跃的内容社区。",
          chips: ["旅拍样张分享", "城市路线灵感", "摄影师与用户双向互动"],
          noteTitle: "适合的分享内容",
          noteCopy: "城市街拍、目的地写真、旅行叙事、路线参考、拍摄前后对比和客户返图都很适合在这里沉淀。",
          showcaseBadge: "社区亮点",
          showcaseTitle: "把路线灵感、真实成片和生活感瞬间放进同一个旅拍社区",
          showcaseLead: "这里强调的是人与城市、故事与情绪之间的连接，让旅拍内容既有审美表达，也有真实生活感。",
          showcaseItems: [
            {
              title: "地点灵感更直观",
              text: "用真实路线、街区和时段内容，帮助用户更快理解不同城市的气质。"
            },
            {
              title: "成片反馈更真实",
              text: "摄影师样张和用户返图同时出现，让风格选择更有参考价值。"
            },
            {
              title: "生活感更强",
              text: "从旅途片段到日常街拍，这里不仅展示作品，也保留人与场景的温度。"
            }
          ]
        },
        en: {
          eyebrow: "Travel Community",
          title: "Travel and Destination Sharing Feed",
          description: "This feed brings together city walks, destination portraits, and outdoor visual stories. Both photographers and users can publish images, videos, and comments to build a more active scene-based community around real work.",
          chips: ["Travel portfolio sharing", "Route and location inspiration", "Two-sided interaction for photographers and users"],
          noteTitle: "What belongs here",
          noteCopy: "City sessions, destination portraits, outdoor storytelling, route references, before-and-after edits, and client return images all fit naturally in this category.",
          showcaseBadge: "Community Highlights",
          showcaseTitle: "Bring route ideas, finished work, and everyday atmosphere into one travel-focused feed",
          showcaseLead: "This category is designed around the connection between people, place, mood, and movement, so the experience feels both visual and lived-in.",
          showcaseItems: [
            {
              title: "Places feel easier to imagine",
              text: "Real routes, neighborhoods, and time-of-day references help visitors understand the character of each city faster."
            },
            {
              title: "Delivered work feels more trustworthy",
              text: "Photographer samples and user return images appear side by side, making style decisions easier and more grounded."
            },
            {
              title: "Daily life stays visible",
              text: "From travel fragments to casual street moments, the feed keeps warmth and real-life texture alongside polished images."
            }
          ]
        }
      },
      seedPosts: [
        {
          id: "travel-seed-1",
          authorId: "seed-travel-ph-1",
          authorName: "Luna Zhao",
          authorRole: "photographer",
          authorCity: "New York",
          createdAt: 1736409600000,
          image: "assets/picture6.jpg",
          title: {
            zh: "布鲁克林黄昏旅拍路线样张",
            en: "Golden-hour Brooklyn travel route sample"
          },
          caption: {
            zh: "这组图想突出傍晚的层次感和街区节奏，适合喜欢电影感、轻纪实和城市氛围的客户参考。",
            en: "This set focuses on dusk layers and neighborhood rhythm, ideal for clients who like cinematic mood, soft documentary framing, and strong city atmosphere."
          },
          tags: ["New York", "Golden Hour", "Travel"],
          reactions: {
            like: ["s1", "s2", "s3", "s4"],
            favorite: ["s1", "s7"],
            love: ["s3", "s8", "s9"],
            dislike: []
          },
          comments: [
            {
              id: "travel-seed-1-comment-1",
              authorName: "Mia",
              authorRole: "user",
              text: {
                zh: "这种路线感很清晰，我如果想拍中央公园附近也可以做类似风格吗？",
                en: "The route feels very clear. Could a similar mood work around Central Park as well?"
              },
              createdAt: 1736496000000
            }
          ]
        },
        {
          id: "travel-seed-2",
          authorId: "seed-travel-user-1",
          authorName: "Rui Chen",
          authorRole: "user",
          authorCity: "San Francisco",
          createdAt: 1737014400000,
          image: "assets/picture2.jpg",
          title: {
            zh: "用户返图：海边城市旅拍成片记录",
            en: "Client return images from a coastal city travel session"
          },
          caption: {
            zh: "我们当时主要想要轻松一点的旅拍感，摄影师帮忙规划了两段路线，最后出片很自然。",
            en: "We wanted a relaxed travel feel, and the photographer helped plan two short route segments. The final images felt very natural."
          },
          tags: ["Coastal", "Return Photos", "City Walk"],
          reactions: {
            like: ["s1", "s4", "s5"],
            favorite: ["s2"],
            love: ["s3", "s4"],
            dislike: ["s10"]
          },
          comments: [
            {
              id: "travel-seed-2-comment-1",
              authorName: "Kai Studio",
              authorRole: "photographer",
              text: {
                zh: "返图很有说服力，这种自然感很适合做旅拍社区的样本内容。",
                en: "Return images like this are persuasive. The natural feeling makes it a strong reference post for the travel feed."
              },
              createdAt: 1737100800000
            }
          ]
        }
      ]
    },
    graduation: {
      theme: {
        accent: "#8b5a4a",
        accentStrong: "#6f4538",
        wash: "rgba(139, 90, 74, 0.1)",
        glow: "rgba(208, 163, 95, 0.18)"
      },
      heroImage: "assets/picture5.jpg",
      pages: {
        zh: {
          eyebrow: "毕业场景社区",
          title: "毕业纪念拍摄分享页",
          description: "这是面向毕业纪念、校园写真和节点记录的内容社区。摄影师可以分享样张、短视频与校园路线，用户也可以发布返图、风格偏好和评论反馈。",
          chips: ["毕业返图分享", "校园路线灵感", "多人互动评论"],
          noteTitle: "适合的分享内容",
          noteCopy: "学士服、校园地标、好友合影、家庭返图、毕业花束和节点纪念都适合在这里持续沉淀。",
          showcaseBadge: "社区亮点",
          showcaseTitle: "让重要节点的纪念感、青春气息和真实陪伴在这里持续发生",
          showcaseLead: "毕业场景不只是成片展示，更是把校园氛围、好友互动和家庭参与感沉淀成一条完整内容线。",
          showcaseItems: [
            {
              title: "校园路线更清楚",
              text: "通过真实样张和返图，用户可以更直观看到地标、光线和多人合影的效果。"
            },
            {
              title: "纪念氛围更完整",
              text: "从个人到朋友再到家庭，这里能自然呈现毕业节点的层次感。"
            },
            {
              title: "互动更有人情味",
              text: "评论和反馈让每一组毕业内容不止被浏览，也被认真回应和延续。"
            }
          ]
        },
        en: {
          eyebrow: "Graduation Community",
          title: "Graduation Sharing Feed",
          description: "This media community is built for graduation memories, campus portraits, and milestone coverage. Photographers can share samples, clips, and route ideas, while users can publish return photos, style preferences, and feedback.",
          chips: ["Graduation return images", "Campus route inspiration", "Multi-user comments and interaction"],
          noteTitle: "What belongs here",
          noteCopy: "Caps and gowns, campus landmarks, friend groups, family return images, bouquets, and milestone memory sets all fit naturally in this category.",
          showcaseBadge: "Community Highlights",
          showcaseTitle: "Keep milestone emotion, campus energy, and real companionship active in one place",
          showcaseLead: "Graduation content is not only about polished finals. It is also about atmosphere, friend groups, family presence, and the feeling of a meaningful transition.",
          showcaseItems: [
            {
              title: "Campus routes feel clearer",
              text: "Real samples and return images help visitors understand landmarks, lighting, and group compositions more quickly."
            },
            {
              title: "Memory feels more layered",
              text: "From solo frames to friend groups and family add-ons, the feed shows how graduation sessions build emotional depth."
            },
            {
              title: "Interaction feels warmer",
              text: "Comments and feedback make each graduation story feel responded to, not just displayed."
            }
          ]
        }
      },
      seedPosts: [
        {
          id: "graduation-seed-1",
          authorId: "seed-grad-ph-1",
          authorName: "Campus Frames",
          authorRole: "photographer",
          authorCity: "Boston",
          createdAt: 1736841600000,
          image: "assets/picture4.jpg",
          title: {
            zh: "校园毕业纪念样张：经典地标 + 朋友合影",
            en: "Graduation sample set with campus landmarks and friend groups"
          },
          caption: {
            zh: "这类路线适合先拍个人，再转好友合影，最后补家人参与镜头，整体节奏更完整。",
            en: "This route works well by starting with solo portraits, then friend group images, and ending with family add-ons for a more complete flow."
          },
          tags: ["Graduation", "Campus", "Group"],
          reactions: {
            like: ["g1", "g2", "g3", "g4", "g5"],
            favorite: ["g1", "g2", "g6"],
            love: ["g4", "g7"],
            dislike: []
          },
          comments: [
            {
              id: "graduation-seed-1-comment-1",
              authorName: "Ivy",
              authorRole: "user",
              text: {
                zh: "如果我想同时拍学士服和便服，这个路线能兼容吗？",
                en: "Could this route also support both gown shots and a second casual outfit?"
              },
              createdAt: 1736928000000
            }
          ]
        },
        {
          id: "graduation-seed-2",
          authorId: "seed-grad-user-1",
          authorName: "Sophia Lin",
          authorRole: "user",
          authorCity: "Los Angeles",
          createdAt: 1737273600000,
          image: "assets/picture5.jpg",
          title: {
            zh: "毕业返图：朋友一起拍真的更有纪念感",
            en: "Graduation return images with friends feel much more memorable"
          },
          caption: {
            zh: "我们三个人一起约拍，摄影师会帮忙安排站位和节奏，所以拍出来很自然，也不会太紧张。",
            en: "Three of us booked together, and the photographer guided positioning and pacing, so the session felt natural and not stressful at all."
          },
          tags: ["Return Photos", "Friends", "Graduation"],
          reactions: {
            like: ["g1", "g2", "g8"],
            favorite: ["g5"],
            love: ["g3", "g7", "g9"],
            dislike: []
          },
          comments: [
            {
              id: "graduation-seed-2-comment-1",
              authorName: "North Hall Photo",
              authorRole: "photographer",
              text: {
                zh: "这种多人的返图特别适合帮助后续客户判断氛围和站位安排。",
                en: "Return images from multi-person sessions are great for helping future clients understand group mood and positioning."
              },
              createdAt: 1737360000000
            }
          ]
        }
      ]
    },
    brand: {
      theme: {
        accent: "#6b4f78",
        accentStrong: "#50385d",
        wash: "rgba(107, 79, 120, 0.1)",
        glow: "rgba(164, 126, 183, 0.16)"
      },
      heroImage: "assets/picture8.jpg",
      pages: {
        zh: {
          eyebrow: "品牌场景社区",
          title: "品牌形象与创意写真分享页",
          description: "这里聚焦个人品牌、创作者主页和商业表达。摄影师可以发布风格案例，用户则可以分享视觉参考、成片反馈和合作需求线索。",
          chips: ["品牌案例分享", "创意参考板", "视觉风格互动"],
          noteTitle: "适合的分享内容",
          noteCopy: "品牌肖像、创作者主页、工作室海报、商业表达、Moodboard 和交付前后对比都很适合沉淀在这里。",
          showcaseBadge: "社区亮点",
          showcaseTitle: "把品牌表达、创意灵感和真实合作反馈放进同一个视觉社区",
          showcaseLead: "这里既适合专业感强的品牌案例，也欢迎更生活化、更真实的灵感参考和使用场景反馈。",
          showcaseItems: [
            {
              title: "风格判断更快",
              text: "品牌案例、参考板和返图并列出现，能帮助双方更快判断审美方向。"
            },
            {
              title: "内容氛围更现代",
              text: "从人物表达、布景到成片用途，这里更强调当代视觉语言和清晰定位。"
            },
            {
              title: "合作感更明确",
              text: "用户可以直接沉淀需求线索，摄影师也能展示自己适合的品牌调性。"
            }
          ]
        },
        en: {
          eyebrow: "Brand Community",
          title: "Brand Portrait and Creative Sharing Feed",
          description: "This feed focuses on personal brands, creator profiles, and commercial expression. Photographers can publish style cases while users can share references, delivered results, and early collaboration signals.",
          chips: ["Brand case studies", "Creative reference boards", "Visual style interaction"],
          noteTitle: "What belongs here",
          noteCopy: "Brand portraits, creator profile images, studio posters, editorial looks, moodboards, and before-and-after delivery comparisons all belong naturally in this category.",
          showcaseBadge: "Community Highlights",
          showcaseTitle: "Bring brand expression, creative references, and real collaboration signals into one visual space",
          showcaseLead: "This feed should feel modern and well-positioned, while still leaving room for more personal, lived-in references and practical feedback.",
          showcaseItems: [
            {
              title: "Style decisions happen faster",
              text: "Brand cases, moodboards, and return images appear together, making visual direction easier to judge."
            },
            {
              title: "The atmosphere feels more current",
              text: "From portrait styling to background treatment and usage context, the feed supports a sharper contemporary brand language."
            },
            {
              title: "Collaboration signals stay visible",
              text: "Users can leave clear direction cues, while photographers can show the brand energy they are strongest at delivering."
            }
          ]
        }
      },
      seedPosts: [
        {
          id: "brand-seed-1",
          authorId: "seed-brand-ph-1",
          authorName: "Nova Visual",
          authorRole: "photographer",
          authorCity: "Seattle",
          createdAt: 1737446400000,
          image: "assets/picture3.jpg",
          title: {
            zh: "创作者主页拍摄：从服装到背景统一品牌感",
            en: "Creator profile session built around a more cohesive brand feeling"
          },
          caption: {
            zh: "这组图主要帮客户建立首页视觉统一度，拍摄前先明确了服装、色调和后续投放场景。",
            en: "This set was designed to make the client profile feel more cohesive. We aligned wardrobe, palette, and downstream usage before the shoot."
          },
          tags: ["Brand", "Creator Profile", "Editorial"],
          reactions: {
            like: ["b1", "b2", "b3", "b4"],
            favorite: ["b2", "b6", "b7"],
            love: ["b3", "b8"],
            dislike: []
          },
          comments: [
            {
              id: "brand-seed-1-comment-1",
              authorName: "Avery",
              authorRole: "user",
              text: {
                zh: "这种风格如果要偏商业一点，是不是可以把背景控制得更干净？",
                en: "If the goal is a more commercial look, would you recommend cleaning up the background even further?"
              },
              createdAt: 1737532800000
            }
          ]
        },
        {
          id: "brand-seed-2",
          authorId: "seed-brand-user-1",
          authorName: "Echo Studio",
          authorRole: "user",
          authorCity: "Chicago",
          createdAt: 1737878400000,
          image: "assets/picture7.jpg",
          title: {
            zh: "用户参考板：想要兼顾人物表达和品牌感",
            en: "Reference board request that balances personality with brand identity"
          },
          caption: {
            zh: "我们是小型工作室，正在整理官网和社媒视觉，希望后续能找摄影师继续深化这套方向。",
            en: "We are a small studio refreshing our website and social visuals, and we want to use this board to help match with a photographer later."
          },
          tags: ["Moodboard", "Brand Identity", "Studio"],
          reactions: {
            like: ["b1", "b9"],
            favorite: ["b5", "b6"],
            love: ["b2", "b3", "b10"],
            dislike: []
          },
          comments: [
            {
              id: "brand-seed-2-comment-1",
              authorName: "Frame Direction",
              authorRole: "photographer",
              text: {
                zh: "这类参考板很适合前期沟通，可以明显提升匹配效率。",
                en: "Boards like this are excellent for pre-production and can dramatically improve photographer matching."
              },
              createdAt: 1737964800000
            }
          ]
        }
      ]
    }
  };

  function initCommunity(root) {
    const sceneKey = root.dataset.scene in SCENES ? root.dataset.scene : "travel";
    const scene = SCENES[sceneKey];
    const locale = root.dataset.locale === "en" ? "en" : "zh";
    const copy = UI[locale];
    const sceneCopy = scene.pages[locale];
    const links = {
      home: locale === "en" ? "index-en.html" : "index.html",
      booking: locale === "en" ? "booking-en.html" : "booking.html",
      contact: locale === "en" ? "contact-en.html" : "contact.html",
      peer: root.dataset.peerUrl || (locale === "en" ? root.dataset.zhUrl : root.dataset.enUrl) || "#"
    };

    applySceneTheme(scene.theme);
    root.innerHTML = renderShell({
      copy: copy,
      sceneCopy: sceneCopy,
      scene: scene,
      locale: locale,
      links: links
    });

    const state = {
      sceneKey: sceneKey,
      locale: locale,
      copy: copy,
      posts: ensurePosts(sceneKey, scene.seedPosts),
      users: loadStoredJson(STORAGE_KEYS.users, []),
      currentUser: loadStoredJson(STORAGE_KEYS.currentUser, null),
      filter: "all"
    };

    const authForm = root.querySelector("#auth-form");
    const authStatus = root.querySelector("#auth-status");
    const identityCard = root.querySelector("#identity-card");
    const identityName = root.querySelector("#identity-name");
    const identityRole = root.querySelector("#identity-role");
    const identityMeta = root.querySelector("#identity-meta");
    const logoutButton = root.querySelector("#logout-button");
    const composerForm = root.querySelector("#composer-form");
    const composerStatus = root.querySelector("#composer-status");
    const fileInput = root.querySelector("#post-file");
    const fileStatus = root.querySelector("#file-status");
    const feedList = root.querySelector("#feed-list");
    const filterButtons = Array.from(root.querySelectorAll("[data-filter-role]"));
    const postCount = root.querySelector("#stat-posts");
    const creatorCount = root.querySelector("#stat-creators");
    const interactionCount = root.querySelector("#stat-interactions");

    updateIdentity();
    updateStats();
    renderFeed();

    authForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = root.querySelector("#auth-name").value.trim();
      const role = root.querySelector("#auth-role").value;
      const city = root.querySelector("#auth-city").value.trim();

      if (!name) {
        authStatus.textContent = copy.registerPrompt;
        return;
      }

      const existingUser = findExistingIdentity(state.users, name, role, city);
      const user = existingUser || {
        id: createId("user"),
        name: name,
        role: role,
        city: city || "",
        createdAt: Date.now()
      };

      state.currentUser = user;
      state.users = dedupeUsers(state.users.concat(user));
      saveStoredJson(STORAGE_KEYS.currentUser, state.currentUser);
      saveStoredJson(STORAGE_KEYS.users, state.users);
      authStatus.textContent = copy.authSuccess;
      authForm.reset();
      updateIdentity();
      updateStats();
      renderFeed();
    });

    logoutButton.addEventListener("click", function () {
      state.currentUser = null;
      localStorage.removeItem(STORAGE_KEYS.currentUser);
      authStatus.textContent = copy.authLogout;
      updateIdentity();
      renderFeed();
    });

    fileInput.addEventListener("change", function () {
      const files = Array.from(fileInput.files || []);
      fileStatus.textContent = formatSelectedFiles(files, copy.fileSelected, state.locale);
    });

    composerForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!state.currentUser) {
        composerStatus.textContent = copy.publishNeedIdentity;
        return;
      }

      const title = root.querySelector("#post-title").value.trim();
      const caption = root.querySelector("#post-caption").value.trim();
      const tagsValue = root.querySelector("#post-tags").value.trim();
      const mediaUrlsValue = root.querySelector("#post-media-urls").value.trim();
      const files = Array.from(fileInput.files || []);
      const mediaUrls = parseMediaUrls(mediaUrlsValue);

      if (!files.length && !mediaUrls.length) {
        composerStatus.textContent = copy.publishNeedImage;
        return;
      }

      composerStatus.textContent = "";

      try {
        const uploadedMedia = await Promise.all(files.map(fileToMediaItem));
        const linkedMedia = mediaUrls.map(function (url) {
          return {
            id: createId("media"),
            type: detectMediaType(url),
            src: url
          };
        });
        const mediaItems = uploadedMedia.concat(linkedMedia);
        const post = {
          id: createId("post"),
          authorId: state.currentUser.id,
          authorName: state.currentUser.name,
          authorRole: state.currentUser.role,
          authorCity: state.currentUser.city || "",
          createdAt: Date.now(),
          image: mediaItems[0] ? mediaItems[0].src : "",
          mediaItems: mediaItems,
          title: title || (state.locale === "en" ? "Untitled media post" : "未命名多媒体分享"),
          caption: caption || "",
          tags: tagsValue ? tagsValue.split(",").map(function (tag) { return tag.trim(); }).filter(Boolean) : [],
          reactions: {
            like: [],
            favorite: [],
            love: [],
            dislike: []
          },
          comments: []
        };

        state.posts.unshift(post);
        if (!savePosts(state.sceneKey, state.posts)) {
          state.posts.shift();
          composerStatus.textContent = copy.publishTooLarge;
          return;
        }
        composerForm.reset();
        fileStatus.textContent = "";
        composerStatus.textContent = copy.publishSuccess;
        updateStats();
        renderFeed();
      } catch (error) {
        composerStatus.textContent = copy.publishError;
      }
    });

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.filter = button.dataset.filterRole;
        filterButtons.forEach(function (item) {
          item.classList.toggle("is-active", item.dataset.filterRole === state.filter);
        });
        renderFeed();
      });
    });

    feedList.addEventListener("click", function (event) {
      const deletePostButton = event.target.closest("[data-delete-post]");
      if (deletePostButton) {
        deletePost(deletePostButton.dataset.postId);
        return;
      }

      const deleteCommentButton = event.target.closest("[data-delete-comment]");
      if (deleteCommentButton) {
        deleteComment(deleteCommentButton.dataset.postId, deleteCommentButton.dataset.commentId);
        return;
      }

      const reactionButton = event.target.closest("[data-reaction]");
      if (reactionButton) {
        const postId = reactionButton.dataset.postId;
        const reaction = reactionButton.dataset.reaction;
        toggleReaction(postId, reaction);
        return;
      }
    });

    feedList.addEventListener("submit", function (event) {
      const form = event.target.closest("[data-comment-form]");
      if (!form) {
        return;
      }

      event.preventDefault();
      const postId = form.dataset.postId;
      const input = form.querySelector("textarea");
      const text = input.value.trim();
      const statusEl = form.querySelector("[data-comment-status]");

      if (!state.currentUser) {
        statusEl.textContent = copy.commentNeedIdentity;
        return;
      }

      if (!text) {
        statusEl.textContent = copy.commentNeedText;
        return;
      }

      const post = state.posts.find(function (item) {
        return item.id === postId;
      });

      if (!post) {
        return;
      }

      post.comments.push({
        id: createId("comment"),
        authorId: state.currentUser.id,
        authorName: state.currentUser.name,
        authorRole: state.currentUser.role,
        text: text,
        createdAt: Date.now()
      });
      savePosts(state.sceneKey, state.posts);
      updateStats();
      renderFeed();
    });

    function updateIdentity() {
      if (!state.currentUser) {
        identityCard.hidden = true;
        identityName.textContent = "";
        identityRole.textContent = "";
        identityMeta.textContent = copy.registerPrompt;
        return;
      }

      identityCard.hidden = false;
      identityName.textContent = state.currentUser.name;
      identityRole.textContent = getRoleLabel(state.currentUser.role, state.locale);
      identityMeta.textContent = state.currentUser.city ? copy.by + " " + state.currentUser.city : copy.by + " 3H-Studio";
    }

    function updateStats() {
      const authors = new Set();
      const photographers = new Set();
      let interactions = 0;

      state.posts.forEach(function (post) {
        authors.add(post.authorId || post.authorName);
        if (post.authorRole === "photographer") {
          photographers.add(post.authorId || post.authorName);
        }
        interactions += totalInteractions(post);
      });

      state.users.forEach(function (user) {
        authors.add(user.id);
        if (user.role === "photographer") {
          photographers.add(user.id);
        }
      });

      postCount.textContent = String(state.posts.length);
      creatorCount.textContent = String(photographers.size);
      interactionCount.textContent = String(interactions);
    }

    function renderFeed() {
      const filtered = state.posts
        .slice()
        .sort(function (a, b) {
          return Number(b.createdAt) - Number(a.createdAt);
        })
        .filter(function (post) {
          if (state.filter === "all") {
            return true;
          }
          return post.authorRole === state.filter;
        });

      if (!filtered.length) {
        feedList.innerHTML = [
          '<div class="panel-card empty-state">',
          "  <h3>" + escapeHtml(copy.emptyTitle) + "</h3>",
          "  <p>" + escapeHtml(copy.emptyCopy) + "</p>",
          "</div>"
        ].join("");
        return;
      }

      feedList.innerHTML = filtered.map(function (post) {
        return renderPost(post, state);
      }).join("");
    }

    function toggleReaction(postId, reaction) {
      if (!state.currentUser) {
        composerStatus.textContent = copy.publishNeedIdentity;
        return;
      }

      const post = state.posts.find(function (item) {
        return item.id === postId;
      });

      if (!post || !post.reactions || !post.reactions[reaction]) {
        return;
      }

      const list = post.reactions[reaction];
      const index = list.indexOf(state.currentUser.id);

      if (index >= 0) {
        list.splice(index, 1);
      } else {
        list.push(state.currentUser.id);
      }

      savePosts(state.sceneKey, state.posts);
      updateStats();
      renderFeed();
    }

    function deletePost(postId) {
      if (!state.currentUser) {
        return;
      }

      const post = state.posts.find(function (item) {
        return item.id === postId;
      });

      if (!post || post.authorId !== state.currentUser.id) {
        return;
      }

      if (!window.confirm(copy.deletePostConfirm)) {
        return;
      }

      state.posts = state.posts.filter(function (item) {
        return item.id !== postId;
      });
      savePosts(state.sceneKey, state.posts);
      updateStats();
      renderFeed();
    }

    function deleteComment(postId, commentId) {
      if (!state.currentUser) {
        return;
      }

      const post = state.posts.find(function (item) {
        return item.id === postId;
      });

      if (!post) {
        return;
      }

      const comment = ensureArray(post.comments).find(function (item) {
        return item.id === commentId;
      });

      if (!comment || comment.authorId !== state.currentUser.id) {
        return;
      }

      if (!window.confirm(copy.deleteCommentConfirm)) {
        return;
      }

      post.comments = ensureArray(post.comments).filter(function (item) {
        return item.id !== commentId;
      });
      savePosts(state.sceneKey, state.posts);
      updateStats();
      renderFeed();
    }
  }

  function renderShell(payload) {
    return [
      '<div class="community-page">',
      '  <header class="community-header">',
      '    <div class="community-header-inner">',
      '      <a class="community-brand" href="' + escapeHtml(payload.links.home) + '">',
      '        <span class="community-brand-mark">3H</span>',
      "        <span>3H-Studio</span>",
      "      </a>",
      '      <nav aria-label="Site navigation">',
      '        <ul class="community-nav">',
      '          <li><a href="' + escapeHtml(payload.links.home) + '">' + escapeHtml(payload.copy.navHome) + "</a></li>",
      '          <li><a href="' + escapeHtml(payload.links.booking) + '">' + escapeHtml(payload.copy.navBooking) + "</a></li>",
      '          <li><a href="' + escapeHtml(payload.links.contact) + '">' + escapeHtml(payload.copy.navContact) + "</a></li>",
      '          <li><a href="' + escapeHtml(payload.links.peer) + '">' + escapeHtml(payload.copy.navLanguage) + "</a></li>",
      "        </ul>",
      "      </nav>",
      "    </div>",
      "  </header>",
      '  <main class="community-shell">',
      '    <section class="community-card community-hero">',
      '      <div class="community-hero-grid">',
      "        <div>",
      '          <span class="community-eyebrow">' + escapeHtml(payload.sceneCopy.eyebrow) + "</span>",
      '          <h1 class="community-title">' + escapeHtml(payload.sceneCopy.title) + "</h1>",
      '          <p class="community-description">' + escapeHtml(payload.sceneCopy.description) + "</p>",
      '          <div class="community-chip-row">' + payload.sceneCopy.chips.map(function (chip) {
            return '<span class="community-chip">' + escapeHtml(chip) + "</span>";
          }).join("") + "</div>",
      '          <div class="community-stat-grid">',
      '            <div class="community-stat-card"><strong id="stat-posts">0</strong><span>' + escapeHtml(payload.copy.postStat) + "</span></div>",
      '            <div class="community-stat-card"><strong id="stat-creators">0</strong><span>' + escapeHtml(payload.copy.creatorStat) + "</span></div>",
      '            <div class="community-stat-card"><strong id="stat-interactions">0</strong><span>' + escapeHtml(payload.copy.interactionStat) + "</span></div>",
      "          </div>",
      "        </div>",
      '        <div class="community-hero-media">',
      '          <img src="' + escapeHtml(payload.scene.heroImage) + '" alt="' + escapeHtml(payload.sceneCopy.title) + '" />',
      '          <div class="community-hero-note">',
      '            <h3>' + escapeHtml(payload.sceneCopy.noteTitle) + "</h3>",
      '            <p>' + escapeHtml(payload.sceneCopy.noteCopy) + "</p>",
      "          </div>",
      "        </div>",
      "      </div>",
      "    </section>",
      '    <section class="community-dashboard">',
      '      <article class="panel-card">',
      '        <h2 class="panel-heading">' + escapeHtml(payload.copy.authTitle) + "</h2>",
      '        <p class="panel-copy">' + escapeHtml(payload.copy.authIntro) + "</p>",
      '        <div id="identity-card" class="identity-card" hidden>',
      '          <div class="identity-row">',
      '            <div>',
      '              <p class="panel-copy">' + escapeHtml(payload.copy.currentIdentity) + "</p>",
      '              <h3 id="identity-name" class="identity-name"></h3>',
      "            </div>",
      '            <span id="identity-role" class="identity-role"></span>',
      "          </div>",
      '          <div id="identity-meta" class="identity-meta"></div>',
      '          <button id="logout-button" class="logout-button" type="button">' + escapeHtml(payload.copy.logout) + "</button>",
      "        </div>",
      '        <form id="auth-form" class="auth-form" style="margin-top: 16px;">',
      '          <div class="form-grid">',
      '            <div class="form-field">',
      '              <label for="auth-name">' + escapeHtml(payload.copy.nameLabel) + "</label>",
      '              <input id="auth-name" type="text" placeholder="' + escapeHtml(payload.copy.namePlaceholder) + '" />',
      "            </div>",
      '            <div class="form-field">',
      '              <label for="auth-role">' + escapeHtml(payload.copy.roleLabel) + "</label>",
      '              <select id="auth-role">',
      '                <option value="photographer">' + escapeHtml(payload.copy.rolePhotographer) + "</option>",
      '                <option value="user">' + escapeHtml(payload.copy.roleUser) + "</option>",
      "              </select>",
      "            </div>",
      "          </div>",
      '          <div class="form-field">',
      '            <label for="auth-city">' + escapeHtml(payload.copy.cityLabel) + "</label>",
      '            <input id="auth-city" type="text" placeholder="' + escapeHtml(payload.copy.cityPlaceholder) + '" />',
      "          </div>",
      '          <button class="action-button" type="submit">' + escapeHtml(payload.copy.registerAction) + "</button>",
      '          <p class="form-help">' + escapeHtml(payload.copy.registerNote) + "</p>",
      '          <div id="auth-status" class="form-status" aria-live="polite"></div>',
      "        </form>",
      "      </article>",
      '      <article class="panel-card scene-spotlight">',
      '        <span class="spotlight-badge">' + escapeHtml(payload.sceneCopy.showcaseBadge) + "</span>",
      '        <h2 class="spotlight-title">' + escapeHtml(payload.sceneCopy.showcaseTitle) + "</h2>",
      '        <p class="panel-copy spotlight-lead">' + escapeHtml(payload.sceneCopy.showcaseLead) + "</p>",
      '        <div class="spotlight-grid">' + payload.sceneCopy.showcaseItems.map(function (item) {
            return [
              '<article class="spotlight-card">',
              '  <h3>' + escapeHtml(item.title) + "</h3>",
              '  <p>' + escapeHtml(item.text) + "</p>",
              "</article>"
            ].join("");
          }).join("") + "</div>",
      "      </article>",
      "    </section>",
      '    <section class="community-feed-shell">',
      '      <div class="sidebar-stack">',
      '        <article class="sidebar-card">',
      '          <h2 class="panel-heading">' + escapeHtml(payload.copy.composerTitle) + "</h2>",
      '          <p class="panel-copy">' + escapeHtml(payload.copy.composerIntro) + "</p>",
      '          <form id="composer-form" class="composer-form" style="margin-top: 16px;">',
      '            <div class="form-field">',
      '              <label for="post-title">' + escapeHtml(payload.copy.titleLabel) + "</label>",
      '              <input id="post-title" type="text" placeholder="' + escapeHtml(payload.copy.titlePlaceholder) + '" />',
      "            </div>",
      '            <div class="form-field">',
      '              <label for="post-caption">' + escapeHtml(payload.copy.captionLabel) + "</label>",
      '              <textarea id="post-caption" placeholder="' + escapeHtml(payload.copy.captionPlaceholder) + '"></textarea>',
      "            </div>",
      '            <div class="form-field">',
      '              <label for="post-tags">' + escapeHtml(payload.copy.tagsLabel) + "</label>",
      '              <input id="post-tags" type="text" placeholder="' + escapeHtml(payload.copy.tagsPlaceholder) + '" />',
      "            </div>",
      '            <div class="form-field">',
      '              <label for="post-media-urls">' + escapeHtml(payload.copy.mediaUrlLabel) + "</label>",
      '              <textarea id="post-media-urls" class="media-url-input" placeholder="' + escapeHtml(payload.copy.mediaUrlPlaceholder) + '"></textarea>',
      '              <p class="form-help">' + escapeHtml(payload.copy.mediaUrlHelp) + "</p>",
      "            </div>",
      '            <div class="form-field">',
      '              <label for="post-file">' + escapeHtml(payload.copy.fileLabel) + "</label>",
      '              <input id="post-file" class="file-input" type="file" accept="image/*,video/*" multiple />',
      '              <div id="file-status" class="form-status"></div>',
      '              <p class="form-help">' + escapeHtml(payload.copy.fileHelp) + "</p>",
      "            </div>",
      '            <button class="action-button" type="submit">' + escapeHtml(payload.copy.publishAction) + "</button>",
      '            <div id="composer-status" class="form-status" aria-live="polite"></div>',
      "          </form>",
      "        </article>",
      '        <article class="sidebar-card">',
      '          <h2 class="panel-heading">' + escapeHtml(payload.copy.guideTitle) + "</h2>",
      '          <ul class="panel-list">' + payload.copy.guideItems.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
          }).join("") + "</ul>",
      '          <div style="margin-top: 16px;"><a class="ghost-button" href="' + escapeHtml(payload.links.booking) + '">' + escapeHtml(payload.copy.openBooking) + "</a></div>",
      "        </article>",
      "      </div>",
      '      <div class="feed-stack">',
      '        <article class="panel-card">',
      '          <div class="toolbar-row">',
      '            <h2 class="toolbar-title">' + escapeHtml(payload.copy.toolbarTitle) + "</h2>",
      '            <div class="filter-row">',
      '              <button class="filter-button is-active" type="button" data-filter-role="all">' + escapeHtml(payload.copy.filterAll) + "</button>",
      '              <button class="filter-button" type="button" data-filter-role="photographer">' + escapeHtml(payload.copy.filterPhotographer) + "</button>",
      '              <button class="filter-button" type="button" data-filter-role="user">' + escapeHtml(payload.copy.filterUser) + "</button>",
      "            </div>",
      "          </div>",
      '          <div id="feed-list" class="feed-list"></div>',
      "        </article>",
      "      </div>",
      "    </section>",
      '    <footer class="community-card community-footer">',
      '      <span>' + escapeHtml(payload.copy.footerNote) + "</span>",
      '      <div class="community-footer-links">',
      '        <a href="' + escapeHtml(payload.links.home) + '">' + escapeHtml(payload.copy.navHome) + "</a>",
      '        <a href="' + escapeHtml(payload.links.booking) + '">' + escapeHtml(payload.copy.navBooking) + "</a>",
      '        <a href="' + escapeHtml(payload.links.contact) + '">' + escapeHtml(payload.copy.navContact) + "</a>",
      "      </div>",
      "    </footer>",
      "  </main>",
      "</div>"
    ].join("");
  }

  function renderPost(post, state) {
    const title = resolveLocalized(post.title, state.locale);
    const caption = resolveLocalized(post.caption, state.locale);
    const comments = Array.isArray(post.comments) ? post.comments : [];
    const tags = Array.isArray(post.tags) ? post.tags : [];
    const mediaItems = getPostMediaItems(post);
    const canDeletePost = Boolean(state.currentUser && post.authorId === state.currentUser.id);

    return [
      '<article class="post-card">',
      renderMediaGallery(mediaItems, title, state.locale),
      '  <div class="post-body">',
      '    <div class="post-meta">',
      '      <div class="post-author">',
      '        <strong>' + escapeHtml(post.authorName || "3H Member") + "</strong>",
      '        <span class="post-role">' + escapeHtml(getRoleLabel(post.authorRole, state.locale)) + "</span>",
      '        <span class="post-time">' + escapeHtml(formatTime(post.createdAt, state.locale, state.copy.timeJustNow)) + "</span>",
      "      </div>",
      '      <div class="post-meta-side">',
      '        <span class="post-time">' + escapeHtml((post.authorCity || state.copy.by + " 3H-Studio")) + "</span>",
      canDeletePost
        ? '        <button class="delete-button" type="button" data-delete-post data-post-id="' + escapeHtml(post.id) + '">' + escapeHtml(state.copy.deletePost) + "</button>"
        : "",
      "      </div>",
      "    </div>",
      '    <h3 class="post-title">' + escapeHtml(title) + "</h3>",
      '    <p class="post-caption">' + escapeHtml(caption) + "</p>",
      '    <div class="tag-row">' + tags.map(function (tag) {
            return '<span class="post-tag">' + escapeHtml(resolveLocalized(tag, state.locale)) + "</span>";
          }).join("") + "</div>",
      '    <div class="reaction-row">' + ["like", "favorite", "love", "dislike"].map(function (reaction) {
            const list = ensureReactionArray(post, reaction);
            const isActive = Boolean(state.currentUser && list.indexOf(state.currentUser.id) >= 0);
            return [
              '<button class="reaction-button' + (isActive ? " is-active" : "") + '" type="button" data-post-id="' + escapeHtml(post.id) + '" data-reaction="' + reaction + '"' + (state.currentUser ? "" : " disabled") + ">",
              escapeHtml(state.copy.reactions[reaction]),
              "<span>" + escapeHtml(String(list.length)) + "</span>",
              "</button>"
            ].join("");
          }).join("") + "</div>",
      '    <div class="comment-section">',
      '      <h4 class="comment-heading">' + escapeHtml(state.copy.commentsTitle) + "</h4>",
      '      <div class="comment-list">' + renderComments(comments, state.locale, state, post.id) + "</div>",
      '      <form class="comment-form" data-comment-form data-post-id="' + escapeHtml(post.id) + '">',
      '        <div class="form-field">',
      '          <textarea placeholder="' + escapeHtml(state.copy.commentPlaceholder) + '"' + (state.currentUser ? "" : " disabled") + '></textarea>',
      "        </div>",
      '        <div class="comment-form-row">',
      '          <div class="form-status" data-comment-status aria-live="polite"></div>',
      '          <button class="comment-button" type="submit"' + (state.currentUser ? "" : " disabled") + ">" + escapeHtml(state.copy.commentAction) + "</button>",
      "        </div>",
      "      </form>",
      "    </div>",
      "  </div>",
      "</article>"
    ].join("");
  }

  function renderComments(comments, locale, state, postId) {
    if (!comments.length) {
      return "";
    }

    return comments.map(function (comment) {
      const text = resolveLocalized(comment.text, locale);
      const canDeleteComment = Boolean(state.currentUser && comment.authorId === state.currentUser.id);
      return [
        '<div class="comment-item">',
        '  <div class="comment-head">',
        '    <strong>' + escapeHtml(comment.authorName || "3H Member") + " · " + escapeHtml(getRoleLabel(comment.authorRole, locale)) + "</strong>",
        canDeleteComment
          ? '    <button class="delete-button" type="button" data-delete-comment data-post-id="' + escapeHtml(postId) + '" data-comment-id="' + escapeHtml(comment.id) + '">' + escapeHtml(UI[locale].deleteComment) + "</button>"
          : "",
        "  </div>",
        '  <p>' + escapeHtml(text) + "</p>",
        "</div>"
      ].join("");
    }).join("");
  }

  function ensurePosts(sceneKey, seeds) {
    const key = STORAGE_KEYS.postsPrefix + sceneKey;
    const stored = loadStoredJson(key, null);

    if (Array.isArray(stored) && stored.length) {
      return normalizePosts(stored);
    }

    const fresh = clone(seeds).map(function (post) {
      return normalizePost(post);
    });
    saveStoredJson(key, fresh);
    return fresh;
  }

  function savePosts(sceneKey, posts) {
    return saveStoredJson(STORAGE_KEYS.postsPrefix + sceneKey, posts);
  }

  function normalizePosts(posts) {
    return posts.map(normalizePost);
  }

  function normalizePost(post) {
    const normalized = Object.assign({}, post);
    normalized.mediaItems = normalizeMediaItems(normalized);
    normalized.image = normalized.image || (normalized.mediaItems[0] ? normalized.mediaItems[0].src : "");
    normalized.reactions = normalized.reactions || {};
    ["like", "favorite", "love", "dislike"].forEach(function (reaction) {
      normalized.reactions[reaction] = ensureArray(normalized.reactions[reaction]);
    });
    normalized.comments = ensureArray(normalized.comments).map(function (comment) {
      return Object.assign({}, comment);
    });
    normalized.tags = ensureArray(normalized.tags);
    return normalized;
  }

  function normalizeMediaItems(post) {
    const rawItems = Array.isArray(post.mediaItems) && post.mediaItems.length
      ? post.mediaItems
      : (post.image ? [{ src: post.image }] : []);

    return rawItems.map(function (item, index) {
      return normalizeMediaItem(item, index);
    }).filter(Boolean);
  }

  function normalizeMediaItem(item, index) {
    const raw = typeof item === "string" ? { src: item } : Object.assign({}, item);
    const src = String(raw.src || raw.url || raw.image || "").trim();

    if (!src) {
      return null;
    }

    return {
      id: raw.id || "media-" + index,
      type: normalizeMediaType(raw.type || raw.mimeType, src),
      src: src
    };
  }

  function ensureReactionArray(post, reaction) {
    post.reactions = post.reactions || {};
    post.reactions[reaction] = ensureArray(post.reactions[reaction]);
    return post.reactions[reaction];
  }

  function ensureArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function getPostMediaItems(post) {
    if (!Array.isArray(post.mediaItems) || !post.mediaItems.length) {
      post.mediaItems = normalizeMediaItems(post);
    }
    return ensureArray(post.mediaItems);
  }

  function renderMediaGallery(mediaItems, title, locale) {
    const galleryItems = mediaItems.length ? mediaItems : [{
      id: "fallback-media",
      type: "image",
      src: "assets/picture1.jpg"
    }];
    const galleryClass = galleryItems.length === 1
      ? "is-single"
      : (galleryItems.length === 2 ? "is-double" : "is-multi");
    const summary = describeMediaCollection(galleryItems, locale);

    return [
      '  <div class="post-media-shell">',
      summary ? '    <div class="post-media-summary">' + escapeHtml(summary) + "</div>" : "",
      '    <div class="post-media-gallery ' + galleryClass + '">',
      galleryItems.map(function (item, index) {
        const isFeatured = galleryItems.length > 2 && index === 0;
        const itemClass = "post-media-item"
          + (item.type === "video" ? " is-video" : " is-image")
          + (isFeatured ? " is-featured" : "");
        return [
          '      <figure class="' + itemClass + '">',
          item.type === "video"
            ? '        <video controls playsinline preload="metadata" src="' + escapeHtml(item.src) + '"></video>'
            : '        <img src="' + escapeHtml(item.src) + '" alt="' + escapeHtml(title) + '" loading="lazy" />',
          '        <span class="post-media-badge">' + escapeHtml(getMediaBadgeText(item.type, index, locale)) + "</span>",
          "      </figure>"
        ].join("");
      }).join(""),
      "    </div>",
      "  </div>"
    ].join("");
  }

  function describeMediaCollection(mediaItems, locale) {
    let imageCount = 0;
    let videoCount = 0;

    ensureArray(mediaItems).forEach(function (item) {
      if (item.type === "video") {
        videoCount += 1;
      } else {
        imageCount += 1;
      }
    });

    const parts = [];

    if (imageCount) {
      parts.push(locale === "en"
        ? imageCount + (imageCount === 1 ? " photo" : " photos")
        : imageCount + " 张照片");
    }

    if (videoCount) {
      parts.push(locale === "en"
        ? videoCount + (videoCount === 1 ? " video" : " videos")
        : videoCount + " 条视频");
    }

    return parts.join(" · ");
  }

  function getMediaBadgeText(type, index, locale) {
    if (type === "video") {
      return locale === "en" ? "Video" : "视频";
    }
    return locale === "en" ? "Photo " + (index + 1) : "图片 " + (index + 1);
  }

  function formatSelectedFiles(files, label, locale) {
    if (!files.length) {
      return "";
    }

    const names = files.slice(0, 3).map(function (file) {
      return file.name;
    }).join(locale === "en" ? ", " : "、");
    const extraCount = files.length - 3;
    const countText = locale === "en"
      ? files.length + (files.length === 1 ? " item" : " items")
      : "共 " + files.length + " 项";

    return label + " " + countText + (names ? " · " + names : "") + (extraCount > 0 ? (locale === "en" ? " +" + extraCount + " more" : " 等更多内容") : "");
  }

  function parseMediaUrls(value) {
    return String(value || "")
      .split(/\r?\n/)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);
  }

  function normalizeMediaType(type, src) {
    const lowered = String(type || "").trim().toLowerCase();

    if (lowered === "video" || lowered.indexOf("video/") === 0) {
      return "video";
    }

    if (lowered === "image" || lowered.indexOf("image/") === 0) {
      return "image";
    }

    return detectMediaType(src);
  }

  function detectMediaType(value) {
    const src = String(value || "").trim();

    if (/^data:video\//i.test(src)) {
      return "video";
    }

    if (/^data:image\//i.test(src)) {
      return "image";
    }

    return /\.(mp4|webm|ogg|mov|m4v)(?:[?#].*)?$/i.test(src) ? "video" : "image";
  }

  function totalInteractions(post) {
    const reactions = post.reactions || {};
    const reactionTotal = ["like", "favorite", "love", "dislike"].reduce(function (sum, key) {
      return sum + ensureArray(reactions[key]).length;
    }, 0);
    return reactionTotal + ensureArray(post.comments).length;
  }

  function getRoleLabel(role, locale) {
    const copy = UI[locale === "en" ? "en" : "zh"];
    return role === "photographer" ? copy.rolePhotographer : copy.roleUser;
  }

  function resolveLocalized(value, locale) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[locale] || value.zh || value.en || "";
    }
    return value == null ? "" : String(value);
  }

  function formatTime(value, locale, fallback) {
    if (!value) {
      return fallback;
    }
    const date = new Date(Number(value));
    if (Number.isNaN(date.getTime())) {
      return fallback;
    }
    return locale === "en"
      ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date)
      : new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric" }).format(date);
  }

  function loadStoredJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveStoredJson(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function dedupeUsers(users) {
    const seen = new Map();
    users.forEach(function (user) {
      seen.set(user.id, user);
    });
    return Array.from(seen.values());
  }

  function createId(prefix) {
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function findExistingIdentity(users, name, role, city) {
    const normalizedName = normalizeIdentityValue(name);
    const normalizedRole = normalizeIdentityValue(role);
    const normalizedCity = normalizeIdentityValue(city);

    return ensureArray(users).find(function (user) {
      return normalizeIdentityValue(user.name) === normalizedName
        && normalizeIdentityValue(user.role) === normalizedRole
        && normalizeIdentityValue(user.city) === normalizedCity;
    }) || null;
  }

  function normalizeIdentityValue(value) {
    return String(value || "").trim().toLowerCase();
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function applySceneTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty("--scene-accent", theme.accent);
    root.style.setProperty("--scene-accent-strong", theme.accentStrong);
    root.style.setProperty("--scene-wash", theme.wash);
    root.style.setProperty("--scene-glow", theme.glow);
  }

  function fileToMediaItem(file) {
    const type = normalizeMediaType(file.type, file.name);

    if (type === "video") {
      return readFileAsDataUrl(file).then(function (src) {
        return {
          id: createId("media"),
          type: "video",
          src: src
        };
      });
    }

    return fileToImageData(file).then(function (src) {
      return {
        id: createId("media"),
        type: "image",
        src: src
      };
    });
  }

  function fileToImageData(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();

      reader.onload = function () {
        const image = new Image();

        image.onload = function () {
          const maxSide = 1600;
          let width = image.width;
          let height = image.height;

          if (width > maxSide || height > maxSide) {
            const scale = Math.min(maxSide / width, maxSide / height);
            width = Math.round(width * scale);
            height = Math.round(height * scale);
          }

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) {
            reject(new Error("Canvas unavailable"));
            return;
          }

          canvas.width = width;
          canvas.height = height;
          context.drawImage(image, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.86));
        };

        image.onerror = function () {
          reject(new Error("Image load failed"));
        };

        image.src = reader.result;
      };

      reader.onerror = function () {
        reject(new Error("Read failed"));
      };

      reader.readAsDataURL(file);
    });
  }

  function readFileAsDataUrl(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();

      reader.onload = function () {
        resolve(String(reader.result || ""));
      };

      reader.onerror = function () {
        reject(new Error("Read failed"));
      };

      reader.readAsDataURL(file);
    });
  }

  document.querySelectorAll("[data-community-app]").forEach(initCommunity);
})();
