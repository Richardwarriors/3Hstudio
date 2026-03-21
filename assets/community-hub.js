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
      authTitle: "社区注册",
      authIntro: "这是一套前端演示版社区，摄影师和用户都可以先登记身份，再发布图片、评论和互动。",
      currentIdentity: "当前身份",
      logout: "退出身份",
      registerAction: "注册 / 切换身份",
      registerNote: "登记后即可在当前浏览器中发布帖子、评论并参与互动。",
      nameLabel: "昵称",
      namePlaceholder: "例如：林同学 / Emma",
      roleLabel: "身份",
      rolePhotographer: "摄影师",
      roleUser: "用户",
      cityLabel: "城市",
      cityPlaceholder: "例如：纽约 / 上海 / 洛杉矶",
      authSuccess: "身份已更新，现在可以开始分享照片和参与互动。",
      authLogout: "当前身份已退出。",
      sceneMechanism: "互动机制",
      mechanismItems: [
        "支持帖子图片分享与本地前端演示发布",
        "每条内容都可进行点赞、收藏、喜爱、拉踩和评论",
        "适合作为后续接入账号系统与数据库前的交互原型"
      ],
      composerTitle: "发布你的图片",
      composerIntro: "你可以上传本地图片，或填写图片链接，把拍摄作品、灵感板和用户回传内容发布到当前场景社区。",
      titleLabel: "帖子标题",
      titlePlaceholder: "给这组图片起一个标题",
      captionLabel: "分享内容",
      captionPlaceholder: "写下你的拍摄故事、风格想法、地点信息或合作背景。",
      tagsLabel: "标签",
      tagsPlaceholder: "例如：纽约, 毕业, 胶片感",
      imageUrlLabel: "图片链接",
      imageUrlPlaceholder: "可选：粘贴图片 URL",
      fileLabel: "本地上传",
      fileHelp: "建议上传一张主图用于演示；当前版本会保存在浏览器本地。",
      publishAction: "发布帖子",
      publishNeedIdentity: "请先登记身份，再发布图片内容。",
      publishNeedImage: "请上传图片文件，或填写一条图片链接后再发布。",
      publishSuccess: "帖子已经发布到当前场景社区。",
      publishError: "图片处理失败了，请换一张图或使用图片链接重试。",
      toolbarTitle: "分享动态",
      filterAll: "全部内容",
      filterPhotographer: "摄影师分享",
      filterUser: "用户分享",
      emptyTitle: "当前筛选下还没有内容",
      emptyCopy: "你可以先切换筛选，或者直接注册身份后发布第一条图片帖子。",
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
      guideTitle: "参与提示",
      guideItems: [
        "摄影师适合分享作品、风格样张、拍摄地点和服务案例",
        "用户适合发布合作返图、风格参考和体验反馈",
        "如果你已经准备好需求，也可以直接前往预约页提交时间与地点"
      ],
      footerNote: "当前为社区前端演示版，账号、图片和互动数据仅保存在当前浏览器本地。",
      openBooking: "前往预约页",
      registerPrompt: "先登记身份，即可开启发帖与互动。",
      fileSelected: "已选择本地图片：",
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
      authTitle: "Community Registration",
      authIntro: "This is a front-end community prototype where photographers and users can register a local identity, share images, and interact with posts.",
      currentIdentity: "Current identity",
      logout: "Sign Out",
      registerAction: "Register / Switch Identity",
      registerNote: "After registering, you can post, comment, and interact inside this browser session.",
      nameLabel: "Display name",
      namePlaceholder: "e.g. Emma / Alex",
      roleLabel: "Role",
      rolePhotographer: "Photographer",
      roleUser: "User",
      cityLabel: "City",
      cityPlaceholder: "e.g. New York / Shanghai / Los Angeles",
      authSuccess: "Identity updated. You can now share photos and join the conversation.",
      authLogout: "The current identity has been signed out.",
      sceneMechanism: "Interaction Model",
      mechanismItems: [
        "Supports image sharing and local front-end posting flows",
        "Each post includes like, favorite, love, dislike, and comment interactions",
        "Designed as a community prototype before a full account system and backend are connected"
      ],
      composerTitle: "Share Your Images",
      composerIntro: "Upload a local image or paste an image URL to publish work samples, inspiration references, or client return images into this scene-specific feed.",
      titleLabel: "Post title",
      titlePlaceholder: "Give this image set a title",
      captionLabel: "Post copy",
      captionPlaceholder: "Share the story behind the images, style direction, location, or collaboration context.",
      tagsLabel: "Tags",
      tagsPlaceholder: "e.g. New York, graduation, film mood",
      imageUrlLabel: "Image URL",
      imageUrlPlaceholder: "Optional: paste an image URL",
      fileLabel: "Local upload",
      fileHelp: "A single cover image is enough for this prototype; it will be stored locally in the browser.",
      publishAction: "Publish Post",
      publishNeedIdentity: "Register an identity before publishing images.",
      publishNeedImage: "Please upload an image file or paste an image URL before publishing.",
      publishSuccess: "The post has been published in this scene community.",
      publishError: "Image processing failed. Please try another file or use an image URL instead.",
      toolbarTitle: "Community Feed",
      filterAll: "All Posts",
      filterPhotographer: "Photographer Posts",
      filterUser: "User Posts",
      emptyTitle: "No posts match this filter yet",
      emptyCopy: "Try another filter, or register an identity and publish the first image post.",
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
      guideTitle: "Participation Tips",
      guideItems: [
        "Photographers can share finished work, style samples, locations, and service cases",
        "Users can post delivered images, inspiration references, and experience feedback",
        "If your request is already clear, you can move straight to the booking page next"
      ],
      footerNote: "This is a front-end community prototype. Accounts, images, and interactions are stored locally in the current browser only.",
      openBooking: "Go to Booking",
      registerPrompt: "Register an identity first to unlock posting and interactions.",
      fileSelected: "Selected local image:",
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
          description: "这里聚合城市漫游、目的地写真与户外故事影像。摄影师和用户都可以在这里发布图片、互动评论，并为真实作品建立更活跃的内容社区。",
          chips: ["旅拍样张分享", "城市路线灵感", "摄影师与用户双向互动"],
          noteTitle: "适合的分享内容",
          noteCopy: "城市街拍、目的地写真、旅行叙事、路线参考、拍摄前后对比和客户返图都很适合在这里沉淀。"
        },
        en: {
          eyebrow: "Travel Community",
          title: "Travel and Destination Sharing Feed",
          description: "This feed brings together city walks, destination portraits, and outdoor visual stories. Both photographers and users can publish images, comment, and build a more active scene-based community around real work.",
          chips: ["Travel portfolio sharing", "Route and location inspiration", "Two-sided interaction for photographers and users"],
          noteTitle: "What belongs here",
          noteCopy: "City sessions, destination portraits, outdoor storytelling, route references, before-and-after edits, and client return images all fit naturally in this category."
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
          description: "这是面向毕业纪念、校园写真和节点记录的图片社区。摄影师可以分享样张与校园路线，用户也可以发布返图、风格偏好和评论反馈。",
          chips: ["毕业返图分享", "校园路线灵感", "多人互动评论"],
          noteTitle: "适合的分享内容",
          noteCopy: "学士服、校园地标、好友合影、家庭返图、毕业花束和节点纪念都适合在这里持续沉淀。"
        },
        en: {
          eyebrow: "Graduation Community",
          title: "Graduation Sharing Feed",
          description: "This image community is built for graduation memories, campus portraits, and milestone coverage. Photographers can share samples and route ideas, while users can publish return images, style preferences, and feedback.",
          chips: ["Graduation return images", "Campus route inspiration", "Multi-user comments and interaction"],
          noteTitle: "What belongs here",
          noteCopy: "Caps and gowns, campus landmarks, friend groups, family return images, bouquets, and milestone memory sets all fit naturally in this category."
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
          noteCopy: "品牌肖像、创作者主页、工作室海报、商业表达、Moodboard 和交付前后对比都很适合沉淀在这里。"
        },
        en: {
          eyebrow: "Brand Community",
          title: "Brand Portrait and Creative Sharing Feed",
          description: "This feed focuses on personal brands, creator profiles, and commercial expression. Photographers can publish style cases while users can share references, delivered results, and early collaboration signals.",
          chips: ["Brand case studies", "Creative reference boards", "Visual style interaction"],
          noteTitle: "What belongs here",
          noteCopy: "Brand portraits, creator profile images, studio posters, editorial looks, moodboards, and before-and-after delivery comparisons all belong naturally in this category."
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
      const file = fileInput.files && fileInput.files[0];
      fileStatus.textContent = file ? copy.fileSelected + " " + file.name : "";
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
      const imageUrl = root.querySelector("#post-image-url").value.trim();
      const file = fileInput.files && fileInput.files[0];

      if (!file && !imageUrl) {
        composerStatus.textContent = copy.publishNeedImage;
        return;
      }

      composerStatus.textContent = "";

      try {
        const image = file ? await fileToImageData(file) : imageUrl;
        const post = {
          id: createId("post"),
          authorId: state.currentUser.id,
          authorName: state.currentUser.name,
          authorRole: state.currentUser.role,
          authorCity: state.currentUser.city || "",
          createdAt: Date.now(),
          image: image,
          title: title || (state.locale === "en" ? "Untitled image share" : "未命名图片分享"),
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
        savePosts(state.sceneKey, state.posts);
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
      '      <article class="panel-card">',
      '        <h2 class="panel-heading">' + escapeHtml(payload.copy.sceneMechanism) + "</h2>",
      '        <p class="panel-copy">' + escapeHtml(payload.sceneCopy.description) + "</p>",
      '        <ul class="panel-list">' + payload.copy.mechanismItems.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
          }).join("") + "</ul>",
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
      '              <label for="post-image-url">' + escapeHtml(payload.copy.imageUrlLabel) + "</label>",
      '              <input id="post-image-url" type="text" placeholder="' + escapeHtml(payload.copy.imageUrlPlaceholder) + '" />',
      "            </div>",
      '            <div class="form-field">',
      '              <label for="post-file">' + escapeHtml(payload.copy.fileLabel) + "</label>",
      '              <input id="post-file" class="file-input" type="file" accept="image/*" />',
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
    const canDeletePost = Boolean(state.currentUser && post.authorId === state.currentUser.id);

    return [
      '<article class="post-card">',
      '  <div class="post-image"><img src="' + escapeHtml(post.image) + '" alt="' + escapeHtml(title) + '" /></div>',
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
    saveStoredJson(STORAGE_KEYS.postsPrefix + sceneKey, posts);
  }

  function normalizePosts(posts) {
    return posts.map(normalizePost);
  }

  function normalizePost(post) {
    const normalized = Object.assign({}, post);
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

  function ensureReactionArray(post, reaction) {
    post.reactions = post.reactions || {};
    post.reactions[reaction] = ensureArray(post.reactions[reaction]);
    return post.reactions[reaction];
  }

  function ensureArray(value) {
    return Array.isArray(value) ? value : [];
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

  document.querySelectorAll("[data-community-app]").forEach(initCommunity);
})();
