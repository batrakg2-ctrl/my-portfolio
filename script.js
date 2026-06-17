/* ==========================================================================
   PORTFOLIO CASES DATABASE (CMS)
   Добавляйте новые кейсы сюда. JS автоматически создаст:
   - 3D-карточку в карусели
   - Слайд с текстом в Hero-секции
   - Миниатюру с прогресс-баром в доке
   - Карточку в сетке портфолио
   - Привяжет модальное окно с описанием
   ========================================================================== */
const PORTFOLIO_CASES = [
    {
        id: 0,
        category: '3d',
        title: 'CHROMATIC',
        subtitle: 'VOID',
        tagline: 'CASE STUDY #1 / 3D ART',
        desc: 'Экспериментальное 3D-исследование жидкого хрома, преломления света и органических форм в Blender.',
        fullDesc: 'Этот проект представляет собой серию абстрактных трехмерных скульптур, созданных для цифровой галереи. В работе использовались продвинутые шейдеры стекла и жидкого металла в Blender. Итоговые рендеры сочетают в себе глянцевый хром, переливающийся цвет и глубокие тени, передавая атмосферу цифрового футуризма.',
        image: 'assets/case_3d.png',
        url: 'project-chromatic.html',
        tags: 'Blender, 3D Art, Lighting',
        year: '2026',
        client: 'Цифровая Галерея "Void"',
        meta: '2026 / ЛИЧНЫЙ ПРОЕКТ',
        badge: '3D ART'
    },
    {
        id: 1,
        category: 'branding',
        title: 'KRYPTON',
        subtitle: 'SECURITY',
        tagline: 'CASE STUDY #2 / BRANDING',
        desc: 'Фирменный стиль, неоновая айдентика и концепт упаковочных решений для высокотехнологичного ИТ-стартапа.',
        fullDesc: 'Krypton обратился к нам за ребрендингом, чтобы заявить о себе как о современном и надежном щите данных. Мы разработали айдентику, построенную на геометрии защитных блоков и агрессивном неоново-зеленом цвете. Фирменный стиль включает разработку упаковки, мерча, визиток, веб-интерфейсов и гайдлайна бренда.',
        image: 'assets/case_branding.png',
        url: 'project-krypton.html',
        tags: 'Branding, Logo, Packaging',
        year: '2025',
        client: 'Krypton Security',
        meta: '2025 / KRYPTON SECURITY',
        badge: 'БРЕНДИНГ'
    },
    {
        id: 2,
        category: 'graphic',
        title: 'CYBER TYPO',
        subtitle: 'POSTER',
        tagline: 'CASE STUDY #3 / GRAPHICS',
        desc: 'Экспериментальный плакат в стиле neo-брутализма с акцентом на жесткую сетку и агрессивную японскую типографику.',
        fullDesc: 'Дизайн этого постера вдохновлен эстетикой японского киберпанка и нео-брутализма. Проект строится на контрасте тяжелых шрифтов, технических схем и ярких оранжевых элементов. Работа демонстрирует владение композицией, балансом хаоса и структуры, а также сложной типографикой в графическом дизайне.',
        image: 'assets/case_graphic.png',
        url: 'project-cyber-typo.html',
        tags: 'Typography, Layout, Print',
        year: '2025',
        client: 'Выставка Токио 2025',
        meta: '2025 / ВЫСТАВОЧНЫЙ СТЕНД',
        badge: 'ГРАФИКА'
    },
    {
        id: 3,
        category: '3d',
        title: 'SOLAR',
        subtitle: 'FLARE',
        tagline: 'CASE STUDY #4 / 3D ART',
        desc: 'Концептуальная 3D-визуализация плазменных потоков и преломления света в фотореалистичной среде.',
        fullDesc: 'Этот проект исследует динамику плазмы и частиц в закрытом пространстве с использованием продвинутых физических симуляций Blender. Особое внимание было уделено сложным материалам свечения, анизотропным отражениям и преломлению лучей сквозь хромированные стеклянные линзы.',
        image: 'assets/case_3d.png',
        url: 'project-solar-flare.html',
        tags: 'Blender, Physics, Particles',
        year: '2026',
        client: 'Космический Музей "Cosmos"',
        meta: '2026 / КОСМИЧЕСКИЙ МУЗЕЙ "COSMOS"',
        badge: '3D ART'
    },
    {
        id: 4,
        category: 'branding',
        title: 'NEO',
        subtitle: 'GASTRO',
        tagline: 'CASE STUDY #5 / BRANDING',
        desc: 'Экологичная айдентика, минималистичный дизайн меню и упаковки здорового стрит-фуда будущего.',
        fullDesc: 'Мы разработали полную линейку упаковки из переработанных материалов, контрастный шрифт для меню и фирменный мерч. Наш дизайн-концепт для Neo Gastro строится на простых геометрических формах и экологичной цветовой гамме, подчеркивающих экологическую чистоту бренда.',
        image: 'assets/case_branding.png',
        url: 'project-neo-gastro.html',
        tags: 'Branding, Identity, Figma',
        year: '2025',
        client: 'NeoGastro Group',
        meta: '2025 / NEOGASTRO GROUP',
        badge: 'БРЕНДИНГ'
    },
    {
        id: 5,
        category: 'graphic',
        title: 'SONIC',
        subtitle: 'WAVE',
        tagline: 'CASE STUDY #6 / GRAPHICS',
        desc: 'Серия бруталистских афиш для фестиваля экспериментального звука на основе дисторшн-текстур.',
        fullDesc: 'Эта серия плакатов выражает визуальную динамику электронной музыки через тяжелую модульную сетку, шумные дисторшн-текстуры и рваную брутальную типографику. Каждый постер представляет собой законченный графический эксперимент со звуковой волной, наложенной на монохромный макет.',
        image: 'assets/case_graphic.png',
        url: 'project-sonic-wave.html',
        tags: 'Poster Design, Print, Photoshop',
        year: '2025',
        client: 'Fest "Sonic Wave"',
        meta: '2025 / FEST "SONIC WAVE"',
        badge: 'ГРАФИКА'
    }
];

/* ==========================================================================
   PORTFOLIO INTERACTION & THREE.JS LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    // 0. DYNAMIC DOM GENERATION FROM DATABASE
    const slidesWrapper = document.querySelector('.hero-slides-wrapper');
    if (slidesWrapper) {
        slidesWrapper.innerHTML = PORTFOLIO_CASES.map((c, idx) => `
            <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <div class="tagline">${c.tagline}</div>
                <h1 class="hero-title">
                    ${c.title}<br>
                    <span class="highlight" data-text="${c.subtitle}">${c.subtitle}</span>
                </h1>
                <p class="hero-desc">${c.desc}</p>
            </div>
        `).join('');
    }

    const thumbsContainer = document.querySelector('.hero-thumbnails-container');
    if (thumbsContainer) {
        thumbsContainer.innerHTML = PORTFOLIO_CASES.map((c, idx) => `
            <div class="hero-thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${c.image}" alt="${c.title} Thumbnail">
                <span class="thumb-progress"><span class="thumb-progress-bar"></span></span>
            </div>
        `).join('');
    }

    const casesGrid = document.querySelector('.cases-grid');
    if (casesGrid) {
        casesGrid.innerHTML = PORTFOLIO_CASES.map(c => `
            <a href="${c.url}" class="case-card" data-category="${c.category}" data-title="${c.title} ${c.subtitle}" data-desc="${c.desc}" data-full-desc="${c.fullDesc}" data-image="${c.image}" data-tags="${c.tags}" data-year="${c.year}" data-client="${c.client}">
                <div class="case-image-wrapper">
                    <img src="${c.image}" alt="${c.title} ${c.subtitle}" class="case-image">
                    <span class="case-badge">${c.badge}</span>
                </div>
                <div class="case-info">
                    <div class="case-meta">${c.meta}</div>
                    <h3 class="case-title">${c.title} ${c.subtitle}</h3>
                    <p class="case-preview">${c.desc}</p>
                    <div class="case-footer">
                        <span class="case-action">СМОТРЕТЬ КЕЙС <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // 1. FLOATING DOCK MENU TOGGLE & SCROLL REVEAL (MAX SHIRKO STYLE)
    const dockWrapper = document.getElementById('dock-wrapper');
    const dockBurger = document.getElementById('dock-burger');
    const dockDropdown = document.getElementById('dock-dropdown');
    const dockLinks = document.querySelectorAll('.dock-link, .dock-dropdown-link, .dock-cta');

    if (dockWrapper) {
        const handleDockScroll = () => {
            if (window.scrollY > 80) {
                dockWrapper.classList.add('visible');
            } else {
                dockWrapper.classList.remove('visible');
                if (dockBurger && dockDropdown) {
                    dockBurger.classList.remove('active');
                    dockDropdown.classList.remove('open');
                }
            }
        };
        window.addEventListener('scroll', handleDockScroll);
        handleDockScroll();
    }

    if (dockBurger && dockDropdown) {
        dockBurger.addEventListener('click', (e) => {
            e.stopPropagation();
            dockBurger.classList.toggle('active');
            dockDropdown.classList.toggle('open');
        });

        dockLinks.forEach(link => {
            link.addEventListener('click', () => {
                dockBurger.classList.remove('active');
                dockDropdown.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (dockWrapper && !dockWrapper.contains(e.target)) {
                dockBurger.classList.remove('active');
                dockDropdown.classList.remove('open');
            }
        });
    }

    // 2. CUSTOM NEO-BRUTALIST CURSOR
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    const interactiveElements = document.querySelectorAll('a, button, .case-card, .filter-btn, input, textarea, .modal-close');

    if (cursor && follower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        const renderCursor = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(renderCursor);
        };
        renderCursor();

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
                follower.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                follower.classList.remove('hovered');
            });
        });
    }

    // 3. THREE.JS 3D CAROUSEL (APECHAIN STYLE)
    const canvas = document.getElementById('hero-canvas');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroThumbs = document.querySelectorAll('.hero-thumbnail');
    const prevBtns = document.querySelectorAll('.prev-slide-btn');
    const nextBtns = document.querySelectorAll('.next-slide-btn');
    const viewCaseBtns = document.querySelectorAll('.view-case-btn');
    const cases = document.querySelectorAll('.case-card');

    let activeIndex = 0;
    const totalSlides = PORTFOLIO_CASES.length;
    let baseRotationY = 0;
    let startRotationY = 0;
    let endRotationY = 0;
    let transitionTime = 0;
    const transitionDuration = 1200; // 1.2s smooth slide transition
    let isTransitioning = false;
    let driftY = 0;
    let progressTick = 0;
    const autoplayDuration = 6000;
    let lastTime = performance.now();
    let carouselGroup;

    if (canvas && typeof THREE !== 'undefined') {
        const container = canvas.parentElement;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 24;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;

        carouselGroup = new THREE.Group();
        scene.add(carouselGroup);

        const textureLoader = new THREE.TextureLoader();
        const textures = PORTFOLIO_CASES.map(c => {
            const tex = textureLoader.load(c.image);
            tex.encoding = THREE.sRGBEncoding;
            tex.repeat.set(1, 5.2 / 8.0);
            tex.offset.set(0, (1 - (5.2 / 8.0)) / 2);
            return tex;
        });

        const step = (Math.PI * 2) / totalSlides;

        const sideMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x181818, metalness: 0.8, roughness: 0.2, clearcoat: 1.0, clearcoatRoughness: 0.1
        });
        const backMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x111111, metalness: 0.9, roughness: 0.3, clearcoat: 0.8
        });

        const createRectShape = (width, height) => {
            const shape = new THREE.Shape();
            const x = -width / 2;
            const y = -height / 2;
            shape.moveTo(x, y);
            shape.lineTo(x, y + height);
            shape.lineTo(x + width, y + height);
            shape.lineTo(x + width, y);
            shape.lineTo(x, y);
            return shape;
        };

        const cardWidth = 8.0;
        const cardHeight = 5.2;
        const cardShape = createRectShape(cardWidth, cardHeight);

        const cardThickness = 0.03; // Very thin plate depth
        const bodyGeometry = new THREE.ExtrudeGeometry(cardShape, {
            depth: cardThickness, bevelEnabled: false
        });
        const frontGeometry = new THREE.ShapeGeometry(cardShape);

        // Normalize UVs for ShapeGeometry (which default to raw x, y coordinates in Three.js)
        const pos = frontGeometry.attributes.position;
        const uvs = frontGeometry.attributes.uv;
        if (pos && uvs) {
            for (let i = 0; i < pos.count; i++) {
                const u = (pos.getX(i) + cardWidth / 2) / cardWidth;
                const v = (pos.getY(i) + cardHeight / 2) / cardHeight;
                uvs.setXY(i, u, v);
            }
            uvs.needsUpdate = true;
        }

        const cardMeshes = [];

        const radius = 8.5;
        for (let i = 0; i < totalSlides; i++) {
            const angle = (i / totalSlides) * Math.PI * 2;
            const frontMaterial = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                map: textures[i],
                metalness: 0.1,
                roughness: 0.25,
                clearcoat: 0.8,
                clearcoatRoughness: 0.1
            });

            const cardContainer = new THREE.Group();
            const bodyMesh = new THREE.Mesh(bodyGeometry, sideMaterial);
            bodyMesh.position.z = -cardThickness;
            cardContainer.add(bodyMesh);

            const frontMesh = new THREE.Mesh(frontGeometry, frontMaterial);
            frontMesh.position.z = 0.001;
            cardContainer.add(frontMesh);

            cardContainer.position.x = Math.sin(angle) * radius;
            cardContainer.position.z = Math.cos(angle) * radius;
            cardContainer.rotation.y = angle;

            carouselGroup.add(cardContainer);
            cardMeshes.push(cardContainer);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.75);
        dirLight.position.set(0, 10, 20);
        scene.add(dirLight);

        const greenLight = new THREE.PointLight(0x00ff66, 4, 50);
        greenLight.position.set(-15, 5, 2);
        scene.add(greenLight);

        const orangeLight = new THREE.PointLight(0xff5500, 5, 50);
        orangeLight.position.set(15, -5, 2);
        scene.add(orangeLight);

        const adjustLayout = () => {
            const width = window.innerWidth;
            if (width > 768) {
                carouselGroup.position.x = 4.8;
                carouselGroup.position.y = 0;
                carouselGroup.scale.set(1.0, 1.0, 1.0);
            } else {
                carouselGroup.position.x = 0;
                carouselGroup.position.y = 0;
                carouselGroup.scale.set(0.72, 0.72, 0.72);
            }
        };
        adjustLayout();

        let targetX = 0;
        let targetY = 0;
        window.addEventListener('mousemove', (e) => {
            targetX = (e.clientX / window.innerWidth) * 2 - 1;
            targetY = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        const showSlide = (idx) => {
            let diff = idx - activeIndex;
            const half = totalSlides / 2;
            if (diff > half) {
                diff -= totalSlides;
            } else if (diff < -half) {
                diff += totalSlides;
            }
            
            // Incorporate accumulated drift into the transition start to prevent visual jumps
            startRotationY = baseRotationY + driftY;
            endRotationY = baseRotationY - diff * step; // Calculate target from the clean, aligned base
            transitionTime = 0;
            isTransitioning = true;
            driftY = 0;

            activeIndex = idx;
            progressTick = 0;

            heroSlides.forEach((slide, sIdx) => {
                if (sIdx === activeIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            heroThumbs.forEach((thumb, tIdx) => {
                const progressBar = thumb.querySelector('.thumb-progress-bar');
                if (tIdx === activeIndex) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                    if (progressBar) progressBar.style.width = '0%';
                }
            });
        };

        const animate = (time) => {
            const delta = Math.min(time - lastTime, 100);
            lastTime = time;

            // Slow constant drift (only when not transitioning to ensure perfectly straight alignment upon landing)
            if (!isTransitioning) {
                driftY -= delta * 0.000025;
            }

            // Easing slide transition
            if (isTransitioning) {
                transitionTime += delta;
                const t = Math.min(transitionTime / transitionDuration, 1.0);
                
                // Cubic ease-in-out curve
                const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                
                baseRotationY = startRotationY + (endRotationY - startRotationY) * ease;
                
                if (t >= 1.0) {
                    isTransitioning = false;
                    baseRotationY = endRotationY;
                }
            }

            const targetYWithSway = baseRotationY + driftY + targetX * 0.15;
            carouselGroup.rotation.y += (targetYWithSway - carouselGroup.rotation.y) * 0.08;
            carouselGroup.rotation.x += (targetY * 0.12 - carouselGroup.rotation.x) * 0.05;

            cardMeshes.forEach((mesh, index) => {
                mesh.position.y = Math.sin(time * 0.0015 + index) * 0.2;
            });

            progressTick += delta;
            const activeProgressBar = heroThumbs[activeIndex].querySelector('.thumb-progress-bar');
            if (activeProgressBar) {
                const percentage = Math.min((progressTick / autoplayDuration) * 100, 100);
                activeProgressBar.style.width = `${percentage}%`;
            }

            if (progressTick >= autoplayDuration) {
                const nextIdx = (activeIndex + 1) % totalSlides;
                showSlide(nextIdx);
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        heroThumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.getAttribute('data-index'));
                showSlide(index);
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const prevIdx = (activeIndex - 1 + totalSlides) % totalSlides;
                showSlide(prevIdx);
            });
        });

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const nextIdx = (activeIndex + 1) % totalSlides;
                showSlide(nextIdx);
            });
        });

        viewCaseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const caseUrl = PORTFOLIO_CASES[activeIndex].url;
                if (caseUrl) {
                    window.location.href = caseUrl;
                }
            });
        });

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            adjustLayout();
        });
    }

    // 4. PORTFOLIO FILTER LOGIC
    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            caseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        card.offsetHeight;
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });

    // 5. DETAIL MODAL WINDOW (Removed: Case studies now have dedicated subpages)

    // 6. BRUTALIST CONTACT FORM SUBMISSION (SIMULATION)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const successMsg = contactForm.querySelector('.form-success-msg');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = 'var(--accent-orange)';
            submitBtn.innerHTML = 'ОТПРАВКА... <i class="fa-solid fa-spinner fa-spin"></i>';

            setTimeout(() => {
                submitBtn.style.display = 'none';
                successMsg.style.display = 'block';
                contactForm.reset();

                setTimeout(() => {
                    successMsg.style.display = 'none';
                    submitBtn.style.display = 'block';
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = 'var(--accent-green)';
                    submitBtn.innerHTML = originalText;
                }, 5000);
            }, 1500);
        });
    }
});
