OSThe landing page is built. Now do a dedicated mobile responsiveness pass on it. Keep the desktop design (1024 px and wider) exactly as it is unless you find a bug, and report any bug you fix.

Reference rules:
- If I attached mobile reference images, match them pixel for pixel at their own width (state the scale and width you assume).
- If I did not, derive the mobile layout from the desktop design language: same colours, type, spacing rhythm, radii and mood. Do not invent a new style.

Do not ask me questions unless you are blocked. List any assumption in the report.

1. Layout and sizing
- Check every section at 320, 360, 375, 390, 412, 430, 768, 820 and 1024 px, in portrait and in landscape (667x375 and 844x390). No horizontal scroll, overlap, clipping or overflow at any size.
- Use fluid type and spacing with clamp(), not only fixed values at breakpoints. Body text at least 16 px.
- Use 100dvh (with a 100vh fallback) for full-height sections so the iPhone Safari address bar never cuts off the hero.
- Add viewport-fit=cover and respect safe areas with env(safe-area-inset-*) on fixed headers, bars and footers.
- Fix flex and grid children that overflow (min-width: 0), long words, long numbers and phone numbers (overflow-wrap), and anything wider than the screen.
- Add -webkit-text-size-adjust: 100%. Avoid background-attachment: fixed (it is broken on iOS).

2. Navigation and actions
- Build a mobile menu in the design's style: a button with aria-expanded and aria-controls, a focus trap, closes on Esc, on link tap and on outside tap, and locks page scroll while open (call lenis.stop() and lenis.start()).
- Add a sticky bottom action bar on mobile with the primary contact actions (call and WhatsApp), styled like the design. It must not cover content or the footer (add bottom padding), must respect the home-indicator safe area, and must not appear on desktop.
- All tap targets at least 44x44 px with at least 8 px between neighbours. Use padding or hit areas, not visual changes.

3. Touch and interaction
- Every hover effect needs a touch equivalent or must be harmless without hover (wrap hover styles in @media (hover: hover)). Nothing important may be reachable only on hover.
- Swiper: smooth swipe, touch-action set so vertical page scroll is never hijacked, visible pagination or controls, no accidental taps while swiping.
- Lenis: keep native touch scrolling. Do not smooth-scroll touch devices.
- ScrollTrigger: disable pinned and scrub-heavy effects on small screens, set ScrollTrigger.config({ ignoreMobileResize: true }), and call ScrollTrigger.refresh() on orientation change.

4. Images and media
- Use <picture> with mobile-specific crops where a wide image would turn small or lose its subject on a phone. Serve smaller files to small screens with srcset and sizes.
- Keep width and height or aspect-ratio on every image so nothing shifts. Hero image no larger than about 100 KB on mobile.

5. Forms
- Inputs at least 16 px so iOS does not zoom on focus. Correct type, inputmode, autocomplete and enterkeyhint on each field. Visible labels. Add scroll-margin so the keyboard never hides the focused field.
- Forms stay static UI only.

6. Mobile performance
- Remove or reduce expensive effects on mobile: backdrop-filter, large blurs, large box-shadows, many simultaneous animations. Animate only transform and opacity. Respect prefers-reduced-motion.
- Make sure it feels smooth on a low-end Android phone, not only on a new iPhone.

7. Accessibility on mobile
- Pinch zoom stays enabled (never set user-scalable=no). The layout still works with text zoomed to 200%. Focus order matches visual order in the mobile menu and action bar.

Verification:
- Test every width listed above in a browser or device emulator. If you cannot open the page in a browser, say so plainly and do not claim you tested it.
- Re-check that desktop looks unchanged.

Final report:
1. A table of issues found and fixed (issue, where, fix).
2. Results per width: pass or fail.
3. What changed on desktop, if anything, and why.
4. "Needs real-device verification": what I should check on an iPhone (Safari) and on an Android phone (Chrome), including the address bar, the keyboard, landscape, the menu and the bottom action bar.