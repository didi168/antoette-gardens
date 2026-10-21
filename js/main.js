/**
 * ANTOINETTE GARDENS AND GUEST HOUSE SERVICES
 * Core JavaScript: Smooth Scroll (Lenis), Animations (GSAP + ScrollTrigger), Mobile Navigation, Forms
 */

(function () {
  'use strict';

  // 1. Mark JavaScript availability on <html> immediately
  document.documentElement.classList.add('js');

  // 2. Reduced Motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 3. Failsafe reveal timeout in case of CDN or script interruptions
  setTimeout(() => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, 3500);

  // 4. Initialize Lenis Smooth Scroll & GSAP ScrollTrigger
  let lenis = null;
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 820);

  // On touch/mobile devices, native momentum scrolling is 120Hz/60Hz and hardware-accelerated.
  // We only run Lenis on desktop/wheel devices with responsive, snappy settings.
  if (!prefersReducedMotion && !isTouchDevice && typeof Lenis !== 'undefined') {
    try {
      lenis = new Lenis({
        duration: 0.7, // Snappy & responsive (eliminates sluggish drag)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.25, // Natural 1:1 wheel distance
        touchMultiplier: 1.0,
        syncTouch: false,
        infinite: false,
      });

      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Smooth scroll initialization fallback:', e);
    }
  }

  // 5. Accessible, Snappy Anchor Navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        // Close mobile drawer if open
        closeMobileDrawer();

        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -80, duration: 0.5 });
        } else {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 6. Mobile Navigation Drawer Controls with Focus Trap & Scroll Lock
  const navToggle = document.getElementById('navToggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');

  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let firstFocusable = null;
  let lastFocusable = null;

  function updateFocusables() {
    if (!mobileNavDrawer) return;
    const focusables = Array.from(mobileNavDrawer.querySelectorAll(focusableSelector));
    firstFocusable = focusables[0] || null;
    lastFocusable = focusables[focusables.length - 1] || null;
  }

  function handleDrawerKeyDown(e) {
    if (e.key === 'Escape') {
      closeMobileDrawer();
      navToggle?.focus();
      return;
    }

    if (e.key === 'Tab') {
      updateFocusables();
      if (!firstFocusable || !lastFocusable) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  function openMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('is-active');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    mobileDrawerBackdrop?.classList.add('is-active');
    mobileDrawerBackdrop?.setAttribute('aria-hidden', 'false');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Lock smooth scroll if active
    if (lenis) {
      try { lenis.stop(); } catch (err) {}
    }

    updateFocusables();
    // Focus close button on open
    setTimeout(() => {
      drawerCloseBtn?.focus();
    }, 50);

    document.addEventListener('keydown', handleDrawerKeyDown);
  }

  function closeMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('is-active');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    mobileDrawerBackdrop?.classList.remove('is-active');
    mobileDrawerBackdrop?.setAttribute('aria-hidden', 'true');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Unlock smooth scroll if active
    if (lenis) {
      try { lenis.start(); } catch (err) {}
    }

    document.removeEventListener('keydown', handleDrawerKeyDown);
  }

  if (navToggle) {
    navToggle.addEventListener('click', openMobileDrawer);
  }
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => {
      closeMobileDrawer();
      navToggle?.focus();
    });
  }
  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);
  }

  // Close drawer on clicking ANY link inside the mobile drawer
  if (mobileNavDrawer) {
    mobileNavDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  // 7. Interactive Booking Form & WhatsApp Pre-fill Dispatch
  const bookingForm = document.getElementById('bookingForm');
  const bookingTabs = document.querySelectorAll('.booking-tab-btn');
  const reservationTypeInput = document.getElementById('reservationType');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // Tab switching
  if (bookingTabs.length > 0) {
    bookingTabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        bookingTabs.forEach((t) => t.classList.remove('is-active'));
        this.classList.add('is-active');
        const selectedType = this.getAttribute('data-type');
        if (reservationTypeInput) {
          reservationTypeInput.value = selectedType;
        }
      });
    });
  }

  // Show Toast Feedback
  function showToast(msg) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }

  // Form submission handler (Static UI: Prevent default, dispatch WhatsApp or local notice)
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('bookName')?.value || '';
      const phone = document.getElementById('bookPhone')?.value || '';
      const date = document.getElementById('bookDate')?.value || '';
      const time = document.getElementById('bookTime')?.value || '';
      const guests = document.getElementById('bookGuests')?.value || '2 Guests';
      const type = reservationTypeInput?.value || 'Table in the Garden';
      const notes = document.getElementById('bookNotes')?.value || 'None';

      // Build WhatsApp message
      const whatsappText = `Hello Antoinette Gardens, I would like to make a reservation:%0A` +
        `• *Type*: ${encodeURIComponent(type)}%0A` +
        `• *Name*: ${encodeURIComponent(name)}%0A` +
        `• *Phone*: ${encodeURIComponent(phone)}%0A` +
        `• *Date*: ${encodeURIComponent(date)}%0A` +
        `• *Time*: ${encodeURIComponent(time)}%0A` +
        `• *Guests*: ${encodeURIComponent(guests)}%0A` +
        `• *Notes*: ${encodeURIComponent(notes)}`;

      // Open WhatsApp direct order/reservation link
      const whatsappUrl = `https://wa.me/2348033144263?text=${whatsappText}`;
      
      showToast(`Thank you, ${name}! Your reservation request is prepared. Redirecting to WhatsApp...`);
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1200);

      // Reset form fields
      bookingForm.reset();
    });
  }

  // 8. Newsletter / VIP Club Form Handling
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast('Thank you for joining our Antoinette Gardens VIP list!');
        emailInput.value = '';
      }
    });
  }

  // 9. GSAP Entrance and Scroll Trigger Reveals
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {
    // Hero Entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.from('.hero-heraldic-header', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 })
          .from('.hero-culinary-tagline', { opacity: 0, y: 15, duration: 0.6 }, '-=0.5')
          .from('.hero-headline', { opacity: 0, y: 30, duration: 0.9 }, '-=0.5')
          .from('.hero-sublead', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
          .from('.circle-reserve-btn', { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.8)' }, '-=0.5')
          .from('.hero-image-wrap', { opacity: 0, y: 40, duration: 1.0 }, '-=0.6')
          .from('.hero-floating-badge', { opacity: 0, scale: 0.85, stagger: 0.15, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.4')
          .from('.hero-quick-chip', { opacity: 0, y: 15, stagger: 0.08, duration: 0.5 }, '-=0.3');

    // Section Scroll Reveals
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.config({ ignoreMobileResize: true });

      // Refresh layout on mobile orientation change
      window.addEventListener('orientationchange', () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      });

      gsap.utils.toArray('.animate-fade-up').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: 'power2.out',
        });
      });

      // Gallery cards subtle tilt parallax on desktop only
      if (window.innerWidth > 768) {
        gsap.utils.toArray('.polaroid-card').forEach((card, index) => {
          const depth = (index % 2 === 0) ? 15 : -15;
          gsap.to(card, {
            scrollTrigger: {
              trigger: '.gallery-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
            y: depth,
            ease: 'none',
          });
        });
      }
    }
  }

  // 10. Header shrink shadow on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

})();
