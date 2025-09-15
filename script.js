window.onload = () => {
    gsap.registerPlugin(ScrollTrigger);

    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menuToggle");
    const menuLinks = menu.querySelectorAll("a");
    let menuOpen = false;

    menuToggle.addEventListener("click", () => {
        menuOpen = !menuOpen;
        menuToggle.classList.toggle("active", menuOpen);

        if (menuOpen) {
            gsap.to(menu, { right: 0, duration: 0.4, ease: "power3.out" });
            gsap.to(menuLinks, {
                x: 0,
                opacity: 1,
                stagger: 0.08,
                delay: 0.1,
                duration: 0.3,
                ease: "power3.out"
            });
        } else {
            gsap.to(menuLinks, {
                x: 50,
                opacity: 0,
                stagger: 0.05,
                duration: 0.2,
                onComplete: () => {
                    gsap.to(menu, { right: "-100%", duration: 0.4, ease: "power3.in" });
                }
            });
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });

    gsap.utils.toArray(".section").forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    gsap.utils.toArray("img").forEach(img => {
        gsap.to(img, {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    gsap.utils.toArray(".card").forEach(card => {
        gsap.to(card, {
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 2 + Math.random()
        });
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.05, duration: 0.2 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.2 });
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#hero h1", {
        opacity: 0,
        y: -100,
        rotation: -15,
        scale: 0.5,
        filter: "blur(20px)",
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.1
    });

    gsap.from("#hero img", {
        opacity: 0,
        y: 200,
        rotation: 720,
        scale: 0.2,
        filter: "blur(40px) drop-shadow(0px 0px 50px #00f)",
        duration: 2,
        ease: "elastic.out(1, 0.5)"
    });

    gsap.utils.toArray(".images-row img").forEach((img, i) => {
        // floating & rotation animation
        gsap.to(img, {
            y: () => Math.random() * 30 - 15,
            rotation: () => Math.random() * 10 - 5,
            duration: 3 + Math.random() * 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

        img.addEventListener("mouseenter", () => {
            gsap.to(img, {
                scale: 1.15,
                rotation: () => Math.random() * 15 - 7,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(img, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
        });
    });

    gsap.from(".contact-container", {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: "back.out(1.7)"
    });


    gsap.from(".submit-btn", {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8
    });

    gsap.utils.toArray(".section").forEach(section => {
        gsap.fromTo(section,
            { y: 50, opacity: 0, rotationX: 15 },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 80%" }
            }
        );
    });

    gsap.utils.toArray("img").forEach(img => {
        gsap.to(img, {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.05, duration: 0.2 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.2 });
        });
    });


    const audio = new Audio();

    document.querySelectorAll(".album").forEach(album => {
        album.addEventListener("mouseenter", () => {
            const track = album.dataset.audio;
            if (audio.src !== track) {
                audio.src = track;
                audio.play();
            } else {
                if (audio.paused) audio.play();
            }
        });

        album.addEventListener("mouseleave", () => {
            audio.pause();
            audio.currentTime = 0;
        });
    });

    gsap.utils.toArray(".schedules tr").forEach(row => {
        gsap.from(row.children, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });

        gsap.to(row.querySelector("::after"), {
            width: "100%",
            duration: 0.6,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });

    });
    gsap.from(".about-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".about-circle", {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });

};