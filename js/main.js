
// Master JS for State: RS - Persona: Gaucho Tradition
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const rs_index_form_immigrate_to_rio_grande_do_sul = document.getElementById('rs-index-form-immigrate-to-rio-grande-do-sul');
  if (rs_index_form_immigrate_to_rio_grande_do_sul) {
    gsap.from('#rs-index-form-immigrate-to-rio-grande-do-sul input, #rs-index-form-immigrate-to-rio-grande-do-sul textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_index_list__immigration_assistance_for_gaucho_cowboys_in_rio_grande_do_sul_ = document.getElementById('rs-index-list--immigration-assistance-for-gaucho-cowboys-in-rio-grande-do-sul-');
  if (rs_index_list__immigration_assistance_for_gaucho_cowboys_in_rio_grande_do_sul_) {
    gsap.from('#rs-index-list--immigration-assistance-for-gaucho-cowboys-in-rio-grande-do-sul- li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_index_list_immigration_legal_services_in_brazil = document.getElementById('rs-index-list-immigration-legal-services-in-brazil');
  if (rs_index_list_immigration_legal_services_in_brazil) {
    gsap.from('#rs-index-list-immigration-legal-services-in-brazil li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_index_section_why_rio_grande_do_sul = document.getElementById('rs-index-section-why-rio-grande-do-sul');
  if (rs_index_section_why_rio_grande_do_sul) {
    gsap.fromTo('#rs-index-section-why-rio-grande-do-sul', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_index_list_how_the_process_works = document.getElementById('rs-index-list-how-the-process-works');
  if (rs_index_list_how_the_process_works) {
    gsap.from('#rs-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_index_section__frequently_asked_questions_about_living_in_rio_grande_do_sul_ = document.getElementById('rs-index-section--frequently-asked-questions-about-living-in-rio-grande-do-sul-');
  if (rs_index_section__frequently_asked_questions_about_living_in_rio_grande_do_sul_) {
    gsap.fromTo('#rs-index-section--frequently-asked-questions-about-living-in-rio-grande-do-sul-', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('rs-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (rs_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#rs-renouncingcitizenship-form-renounce-brazilian-citizenship input, #rs-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_quick_facts = document.getElementById('rs-renouncingcitizenship-list-quick-facts');
  if (rs_renouncingcitizenship_list_quick_facts) {
    gsap.from('#rs-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('rs-renouncingcitizenship-list-common-challenges-applicants-face');
  if (rs_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rs-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('rs-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (rs_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rs-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_renunciation_overview = document.getElementById('rs-renouncingcitizenship-section-renunciation-overview');
  if (rs_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#rs-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_form_who_is_this_for = document.getElementById('rs-renouncingcitizenship-form-who-is-this-for');
  if (rs_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#rs-renouncingcitizenship-form-who-is-this-for input, #rs-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_required_documents = document.getElementById('rs-renouncingcitizenship-list-required-documents');
  if (rs_renouncingcitizenship_list_required_documents) {
    gsap.from('#rs-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_process = document.getElementById('rs-renouncingcitizenship-list-process');
  if (rs_renouncingcitizenship_list_process) {
    gsap.from('#rs-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_timelines_deadlines = document.getElementById('rs-renouncingcitizenship-section-timelines-deadlines');
  if (rs_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rs-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_fees_costs = document.getElementById('rs-renouncingcitizenship-section-fees-costs');
  if (rs_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#rs-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('rs-renouncingcitizenship-list-risks-common-mistakes');
  if (rs_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#rs-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('rs-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (rs_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_rio_grande_do_sul_specific_context = document.getElementById('rs-renouncingcitizenship-section-rio-grande-do-sul-specific-context');
  if (rs_renouncingcitizenship_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-renouncingcitizenship-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_what_our_clients_say = document.getElementById('rs-renouncingcitizenship-section-what-our-clients-say');
  if (rs_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rs-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('rs-renouncingcitizenship-section-frequently-asked-questions');
  if (rs_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rs-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_international_support = document.getElementById('rs-renouncingcitizenship-section-international-support');
  if (rs_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#rs-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_our_credentials = document.getElementById('rs-renouncingcitizenship-list-our-credentials');
  if (rs_renouncingcitizenship_list_our_credentials) {
    gsap.from('#rs-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_list_related_services = document.getElementById('rs-renouncingcitizenship-list-related-services');
  if (rs_renouncingcitizenship_list_related_services) {
    gsap.from('#rs-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('rs-renouncingcitizenship-section-youre-in-good-hands');
  if (rs_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rs-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_renouncingcitizenship_section_21 = document.getElementById('rs-renouncingcitizenship-section-21');
  if (rs_renouncingcitizenship_section_21) {
    gsap.fromTo('#rs-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('rs-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (rs_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#rs-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #rs-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_quick_facts = document.getElementById('rs-provisional-list-quick-facts');
  if (rs_provisional_list_quick_facts) {
    gsap.from('#rs-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_common_challenges_applicants_face = document.getElementById('rs-provisional-list-common-challenges-applicants-face');
  if (rs_provisional_list_common_challenges_applicants_face) {
    gsap.from('#rs-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_how_we_solve_these_challenges = document.getElementById('rs-provisional-list-how-we-solve-these-challenges');
  if (rs_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#rs-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_naturalisation_overview = document.getElementById('rs-provisional-section-naturalisation-overview');
  if (rs_provisional_section_naturalisation_overview) {
    gsap.fromTo('#rs-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_form_who_is_this_naturalisation_for = document.getElementById('rs-provisional-form-who-is-this-naturalisation-for');
  if (rs_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#rs-provisional-form-who-is-this-naturalisation-for input, #rs-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_required_documents = document.getElementById('rs-provisional-list-required-documents');
  if (rs_provisional_list_required_documents) {
    gsap.from('#rs-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_application_process = document.getElementById('rs-provisional-list-application-process');
  if (rs_provisional_list_application_process) {
    gsap.from('#rs-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_timelines_deadlines = document.getElementById('rs-provisional-section-timelines-deadlines');
  if (rs_provisional_section_timelines_deadlines) {
    gsap.fromTo('#rs-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_fees_costs = document.getElementById('rs-provisional-section-fees-costs');
  if (rs_provisional_section_fees_costs) {
    gsap.fromTo('#rs-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_risks_common_mistakes = document.getElementById('rs-provisional-list-risks-common-mistakes');
  if (rs_provisional_list_risks_common_mistakes) {
    gsap.from('#rs-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_diy_vs_professional_assistance = document.getElementById('rs-provisional-section-diy-vs-professional-assistance');
  if (rs_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_rio_grande_do_sul_specific_context = document.getElementById('rs-provisional-section-rio-grande-do-sul-specific-context');
  if (rs_provisional_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-provisional-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_what_our_clients_say = document.getElementById('rs-provisional-section-what-our-clients-say');
  if (rs_provisional_section_what_our_clients_say) {
    gsap.fromTo('#rs-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_frequently_asked_questions = document.getElementById('rs-provisional-section-frequently-asked-questions');
  if (rs_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#rs-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_international_support = document.getElementById('rs-provisional-section-international-support');
  if (rs_provisional_section_international_support) {
    gsap.fromTo('#rs-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_our_credentials = document.getElementById('rs-provisional-list-our-credentials');
  if (rs_provisional_list_our_credentials) {
    gsap.from('#rs-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_list_related_services = document.getElementById('rs-provisional-list-related-services');
  if (rs_provisional_list_related_services) {
    gsap.from('#rs-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_youre_in_good_hands = document.getElementById('rs-provisional-section-youre-in-good-hands');
  if (rs_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#rs-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_provisional_section_21 = document.getElementById('rs-provisional-section-21');
  if (rs_provisional_section_21) {
    gsap.fromTo('#rs-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('rs-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (rs_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#rs-special-form-special-naturalisation-in-brazil-for-particular-cases input, #rs-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_quick_facts = document.getElementById('rs-special-list-quick-facts');
  if (rs_special_list_quick_facts) {
    gsap.from('#rs-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_common_challenges_applicants_face = document.getElementById('rs-special-list-common-challenges-applicants-face');
  if (rs_special_list_common_challenges_applicants_face) {
    gsap.from('#rs-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_how_we_solve_these_challenges = document.getElementById('rs-special-list-how-we-solve-these-challenges');
  if (rs_special_list_how_we_solve_these_challenges) {
    gsap.from('#rs-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_naturalisation_overview = document.getElementById('rs-special-section-naturalisation-overview');
  if (rs_special_section_naturalisation_overview) {
    gsap.fromTo('#rs-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_form_who_is_this_naturalisation_for = document.getElementById('rs-special-form-who-is-this-naturalisation-for');
  if (rs_special_form_who_is_this_naturalisation_for) {
    gsap.from('#rs-special-form-who-is-this-naturalisation-for input, #rs-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_required_documents = document.getElementById('rs-special-list-required-documents');
  if (rs_special_list_required_documents) {
    gsap.from('#rs-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_application_process = document.getElementById('rs-special-list-application-process');
  if (rs_special_list_application_process) {
    gsap.from('#rs-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_timelines_deadlines = document.getElementById('rs-special-section-timelines-deadlines');
  if (rs_special_section_timelines_deadlines) {
    gsap.fromTo('#rs-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_fees_costs = document.getElementById('rs-special-section-fees-costs');
  if (rs_special_section_fees_costs) {
    gsap.fromTo('#rs-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_risks_common_mistakes = document.getElementById('rs-special-list-risks-common-mistakes');
  if (rs_special_list_risks_common_mistakes) {
    gsap.from('#rs-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_diy_vs_professional_assistance = document.getElementById('rs-special-section-diy-vs-professional-assistance');
  if (rs_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_rio_grande_do_sul_specific_context = document.getElementById('rs-special-section-rio-grande-do-sul-specific-context');
  if (rs_special_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-special-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_what_our_clients_say = document.getElementById('rs-special-section-what-our-clients-say');
  if (rs_special_section_what_our_clients_say) {
    gsap.fromTo('#rs-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_frequently_asked_questions = document.getElementById('rs-special-section-frequently-asked-questions');
  if (rs_special_section_frequently_asked_questions) {
    gsap.fromTo('#rs-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_international_support = document.getElementById('rs-special-section-international-support');
  if (rs_special_section_international_support) {
    gsap.fromTo('#rs-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_our_credentials = document.getElementById('rs-special-list-our-credentials');
  if (rs_special_list_our_credentials) {
    gsap.from('#rs-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_list_related_services = document.getElementById('rs-special-list-related-services');
  if (rs_special_list_related_services) {
    gsap.from('#rs-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_youre_in_good_hands = document.getElementById('rs-special-section-youre-in-good-hands');
  if (rs_special_section_youre_in_good_hands) {
    gsap.fromTo('#rs-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_special_section_21 = document.getElementById('rs-special-section-21');
  if (rs_special_section_21) {
    gsap.fromTo('#rs-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('rs-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (rs_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#rs-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #rs-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_quick_facts = document.getElementById('rs-ordinary-list-quick-facts');
  if (rs_ordinary_list_quick_facts) {
    gsap.from('#rs-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_common_challenges_applicants_face = document.getElementById('rs-ordinary-list-common-challenges-applicants-face');
  if (rs_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#rs-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_how_we_solve_these_challenges = document.getElementById('rs-ordinary-list-how-we-solve-these-challenges');
  if (rs_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rs-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_naturalisation_overview = document.getElementById('rs-ordinary-section-naturalisation-overview');
  if (rs_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#rs-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_form_who_is_this_naturalisation_for = document.getElementById('rs-ordinary-form-who-is-this-naturalisation-for');
  if (rs_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rs-ordinary-form-who-is-this-naturalisation-for input, #rs-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_required_documents = document.getElementById('rs-ordinary-list-required-documents');
  if (rs_ordinary_list_required_documents) {
    gsap.from('#rs-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_application_process = document.getElementById('rs-ordinary-list-application-process');
  if (rs_ordinary_list_application_process) {
    gsap.from('#rs-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_timelines_deadlines = document.getElementById('rs-ordinary-section-timelines-deadlines');
  if (rs_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#rs-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_fees_costs = document.getElementById('rs-ordinary-section-fees-costs');
  if (rs_ordinary_section_fees_costs) {
    gsap.fromTo('#rs-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_risks_common_mistakes = document.getElementById('rs-ordinary-list-risks-common-mistakes');
  if (rs_ordinary_list_risks_common_mistakes) {
    gsap.from('#rs-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_diy_vs_professional_assistance = document.getElementById('rs-ordinary-section-diy-vs-professional-assistance');
  if (rs_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_rio_grande_do_sul_specific_context = document.getElementById('rs-ordinary-section-rio-grande-do-sul-specific-context');
  if (rs_ordinary_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-ordinary-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_what_our_clients_say = document.getElementById('rs-ordinary-section-what-our-clients-say');
  if (rs_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#rs-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_frequently_asked_questions = document.getElementById('rs-ordinary-section-frequently-asked-questions');
  if (rs_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rs-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_international_support = document.getElementById('rs-ordinary-section-international-support');
  if (rs_ordinary_section_international_support) {
    gsap.fromTo('#rs-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_our_credentials = document.getElementById('rs-ordinary-list-our-credentials');
  if (rs_ordinary_list_our_credentials) {
    gsap.from('#rs-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_list_related_services = document.getElementById('rs-ordinary-list-related-services');
  if (rs_ordinary_list_related_services) {
    gsap.from('#rs-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_youre_in_good_hands = document.getElementById('rs-ordinary-section-youre-in-good-hands');
  if (rs_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rs-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_ordinary_section_21 = document.getElementById('rs-ordinary-section-21');
  if (rs_ordinary_section_21) {
    gsap.fromTo('#rs-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('rs-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (rs_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#rs-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #rs-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_quick_facts = document.getElementById('rs-extraordinary-list-quick-facts');
  if (rs_extraordinary_list_quick_facts) {
    gsap.from('#rs-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_common_challenges_applicants_face = document.getElementById('rs-extraordinary-list-common-challenges-applicants-face');
  if (rs_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#rs-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_how_we_solve_these_challenges = document.getElementById('rs-extraordinary-list-how-we-solve-these-challenges');
  if (rs_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rs-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_naturalisation_overview = document.getElementById('rs-extraordinary-section-naturalisation-overview');
  if (rs_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#rs-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('rs-extraordinary-form-who-is-this-naturalisation-for');
  if (rs_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rs-extraordinary-form-who-is-this-naturalisation-for input, #rs-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_required_documents = document.getElementById('rs-extraordinary-list-required-documents');
  if (rs_extraordinary_list_required_documents) {
    gsap.from('#rs-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_application_process = document.getElementById('rs-extraordinary-list-application-process');
  if (rs_extraordinary_list_application_process) {
    gsap.from('#rs-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_timelines_deadlines = document.getElementById('rs-extraordinary-section-timelines-deadlines');
  if (rs_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#rs-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_fees_costs = document.getElementById('rs-extraordinary-section-fees-costs');
  if (rs_extraordinary_section_fees_costs) {
    gsap.fromTo('#rs-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_risks_common_mistakes = document.getElementById('rs-extraordinary-list-risks-common-mistakes');
  if (rs_extraordinary_list_risks_common_mistakes) {
    gsap.from('#rs-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_diy_vs_professional_assistance = document.getElementById('rs-extraordinary-section-diy-vs-professional-assistance');
  if (rs_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_rio_grande_do_sul_specific_context = document.getElementById('rs-extraordinary-section-rio-grande-do-sul-specific-context');
  if (rs_extraordinary_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-extraordinary-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_what_our_clients_say = document.getElementById('rs-extraordinary-section-what-our-clients-say');
  if (rs_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#rs-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_frequently_asked_questions = document.getElementById('rs-extraordinary-section-frequently-asked-questions');
  if (rs_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rs-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_international_support = document.getElementById('rs-extraordinary-section-international-support');
  if (rs_extraordinary_section_international_support) {
    gsap.fromTo('#rs-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_our_credentials = document.getElementById('rs-extraordinary-list-our-credentials');
  if (rs_extraordinary_list_our_credentials) {
    gsap.from('#rs-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_list_related_services = document.getElementById('rs-extraordinary-list-related-services');
  if (rs_extraordinary_list_related_services) {
    gsap.from('#rs-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_youre_in_good_hands = document.getElementById('rs-extraordinary-section-youre-in-good-hands');
  if (rs_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rs-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extraordinary_section_21 = document.getElementById('rs-extraordinary-section-21');
  if (rs_extraordinary_section_21) {
    gsap.fromTo('#rs-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('rs-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (rs_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#rs-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #rs-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_quick_facts = document.getElementById('rs-reacquisitioncitizenship-list-quick-facts');
  if (rs_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#rs-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('rs-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (rs_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rs-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('rs-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (rs_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rs-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('rs-reacquisitioncitizenship-section-reacquisition-overview');
  if (rs_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('rs-reacquisitioncitizenship-form-who-is-this-for');
  if (rs_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#rs-reacquisitioncitizenship-form-who-is-this-for input, #rs-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_required_documents = document.getElementById('rs-reacquisitioncitizenship-list-required-documents');
  if (rs_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#rs-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_process = document.getElementById('rs-reacquisitioncitizenship-list-process');
  if (rs_reacquisitioncitizenship_list_process) {
    gsap.from('#rs-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('rs-reacquisitioncitizenship-section-timelines-deadlines');
  if (rs_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_fees_costs = document.getElementById('rs-reacquisitioncitizenship-section-fees-costs');
  if (rs_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('rs-reacquisitioncitizenship-list-risks-common-mistakes');
  if (rs_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#rs-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('rs-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (rs_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_rio_grande_do_sul_specific_context = document.getElementById('rs-reacquisitioncitizenship-section-rio-grande-do-sul-specific-context');
  if (rs_reacquisitioncitizenship_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('rs-reacquisitioncitizenship-section-what-our-clients-say');
  if (rs_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('rs-reacquisitioncitizenship-section-frequently-asked-questions');
  if (rs_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_international_support = document.getElementById('rs-reacquisitioncitizenship-section-international-support');
  if (rs_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_our_credentials = document.getElementById('rs-reacquisitioncitizenship-list-our-credentials');
  if (rs_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#rs-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_list_related_services = document.getElementById('rs-reacquisitioncitizenship-list-related-services');
  if (rs_reacquisitioncitizenship_list_related_services) {
    gsap.from('#rs-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('rs-reacquisitioncitizenship-section-youre-in-good-hands');
  if (rs_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_reacquisitioncitizenship_section_21 = document.getElementById('rs-reacquisitioncitizenship-section-21');
  if (rs_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#rs-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('rs-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (rs_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#rs-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #rs-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_quick_facts = document.getElementById('rs-scientificresearch-list-quick-facts');
  if (rs_scientificresearch_list_quick_facts) {
    gsap.from('#rs-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_common_challenges_applicants_face = document.getElementById('rs-scientificresearch-list-common-challenges-applicants-face');
  if (rs_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#rs-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('rs-scientificresearch-list-how-we-solve-these-challenges');
  if (rs_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#rs-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_residency_overview = document.getElementById('rs-scientificresearch-section-residency-overview');
  if (rs_scientificresearch_section_residency_overview) {
    gsap.fromTo('#rs-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_form_who_is_this_residency_for = document.getElementById('rs-scientificresearch-form-who-is-this-residency-for');
  if (rs_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#rs-scientificresearch-form-who-is-this-residency-for input, #rs-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_required_documents = document.getElementById('rs-scientificresearch-list-required-documents');
  if (rs_scientificresearch_list_required_documents) {
    gsap.from('#rs-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_application_process = document.getElementById('rs-scientificresearch-list-application-process');
  if (rs_scientificresearch_list_application_process) {
    gsap.from('#rs-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_timelines_deadlines = document.getElementById('rs-scientificresearch-section-timelines-deadlines');
  if (rs_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#rs-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_fees_costs = document.getElementById('rs-scientificresearch-section-fees-costs');
  if (rs_scientificresearch_section_fees_costs) {
    gsap.fromTo('#rs-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_risks_common_mistakes = document.getElementById('rs-scientificresearch-list-risks-common-mistakes');
  if (rs_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#rs-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('rs-scientificresearch-section-diy-vs-professional-assistance');
  if (rs_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_rio_grande_do_sul_specific_context = document.getElementById('rs-scientificresearch-section-rio-grande-do-sul-specific-context');
  if (rs_scientificresearch_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-scientificresearch-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_what_our_clients_say = document.getElementById('rs-scientificresearch-section-what-our-clients-say');
  if (rs_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#rs-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_frequently_asked_questions = document.getElementById('rs-scientificresearch-section-frequently-asked-questions');
  if (rs_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#rs-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_international_support = document.getElementById('rs-scientificresearch-section-international-support');
  if (rs_scientificresearch_section_international_support) {
    gsap.fromTo('#rs-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_our_credentials = document.getElementById('rs-scientificresearch-list-our-credentials');
  if (rs_scientificresearch_list_our_credentials) {
    gsap.from('#rs-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_list_related_services = document.getElementById('rs-scientificresearch-list-related-services');
  if (rs_scientificresearch_list_related_services) {
    gsap.from('#rs-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_youre_in_good_hands = document.getElementById('rs-scientificresearch-section-youre-in-good-hands');
  if (rs_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#rs-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_scientificresearch_section_21 = document.getElementById('rs-scientificresearch-section-21');
  if (rs_scientificresearch_section_21) {
    gsap.fromTo('#rs-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_form_study_in_brazil_with_study_residency = document.getElementById('rs-study-form-study-in-brazil-with-study-residency');
  if (rs_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#rs-study-form-study-in-brazil-with-study-residency input, #rs-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_quick_facts = document.getElementById('rs-study-list-quick-facts');
  if (rs_study_list_quick_facts) {
    gsap.from('#rs-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_common_challenges_applicants_face = document.getElementById('rs-study-list-common-challenges-applicants-face');
  if (rs_study_list_common_challenges_applicants_face) {
    gsap.from('#rs-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_how_we_solve_these_challenges = document.getElementById('rs-study-list-how-we-solve-these-challenges');
  if (rs_study_list_how_we_solve_these_challenges) {
    gsap.from('#rs-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_residency_overview = document.getElementById('rs-study-section-residency-overview');
  if (rs_study_section_residency_overview) {
    gsap.fromTo('#rs-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_form_who_is_this_residency_for = document.getElementById('rs-study-form-who-is-this-residency-for');
  if (rs_study_form_who_is_this_residency_for) {
    gsap.from('#rs-study-form-who-is-this-residency-for input, #rs-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_required_documents = document.getElementById('rs-study-list-required-documents');
  if (rs_study_list_required_documents) {
    gsap.from('#rs-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_application_process = document.getElementById('rs-study-list-application-process');
  if (rs_study_list_application_process) {
    gsap.from('#rs-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_timelines_deadlines = document.getElementById('rs-study-section-timelines-deadlines');
  if (rs_study_section_timelines_deadlines) {
    gsap.fromTo('#rs-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_fees_costs = document.getElementById('rs-study-section-fees-costs');
  if (rs_study_section_fees_costs) {
    gsap.fromTo('#rs-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_risks_common_mistakes = document.getElementById('rs-study-list-risks-common-mistakes');
  if (rs_study_list_risks_common_mistakes) {
    gsap.from('#rs-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_diy_vs_professional_assistance = document.getElementById('rs-study-section-diy-vs-professional-assistance');
  if (rs_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_rio_grande_do_sul_specific_context = document.getElementById('rs-study-section-rio-grande-do-sul-specific-context');
  if (rs_study_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-study-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_what_our_clients_say = document.getElementById('rs-study-section-what-our-clients-say');
  if (rs_study_section_what_our_clients_say) {
    gsap.fromTo('#rs-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_frequently_asked_questions = document.getElementById('rs-study-section-frequently-asked-questions');
  if (rs_study_section_frequently_asked_questions) {
    gsap.fromTo('#rs-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_international_support = document.getElementById('rs-study-section-international-support');
  if (rs_study_section_international_support) {
    gsap.fromTo('#rs-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_our_credentials = document.getElementById('rs-study-list-our-credentials');
  if (rs_study_list_our_credentials) {
    gsap.from('#rs-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_list_related_services = document.getElementById('rs-study-list-related-services');
  if (rs_study_list_related_services) {
    gsap.from('#rs-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_youre_in_good_hands = document.getElementById('rs-study-section-youre-in-good-hands');
  if (rs_study_section_youre_in_good_hands) {
    gsap.fromTo('#rs-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_study_section_21 = document.getElementById('rs-study-section-21');
  if (rs_study_section_21) {
    gsap.fromTo('#rs-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('rs-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (rs_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#rs-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #rs-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_quick_facts = document.getElementById('rs-educationalexchange-list-quick-facts');
  if (rs_educationalexchange_list_quick_facts) {
    gsap.from('#rs-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_common_challenges_applicants_face = document.getElementById('rs-educationalexchange-list-common-challenges-applicants-face');
  if (rs_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#rs-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('rs-educationalexchange-list-how-we-solve-these-challenges');
  if (rs_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rs-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_residency_overview = document.getElementById('rs-educationalexchange-section-residency-overview');
  if (rs_educationalexchange_section_residency_overview) {
    gsap.fromTo('#rs-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_form_who_is_this_residency_for = document.getElementById('rs-educationalexchange-form-who-is-this-residency-for');
  if (rs_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#rs-educationalexchange-form-who-is-this-residency-for input, #rs-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_required_documents = document.getElementById('rs-educationalexchange-list-required-documents');
  if (rs_educationalexchange_list_required_documents) {
    gsap.from('#rs-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_application_process = document.getElementById('rs-educationalexchange-list-application-process');
  if (rs_educationalexchange_list_application_process) {
    gsap.from('#rs-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_timelines_deadlines = document.getElementById('rs-educationalexchange-section-timelines-deadlines');
  if (rs_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#rs-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_fees_costs = document.getElementById('rs-educationalexchange-section-fees-costs');
  if (rs_educationalexchange_section_fees_costs) {
    gsap.fromTo('#rs-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_risks_common_mistakes = document.getElementById('rs-educationalexchange-list-risks-common-mistakes');
  if (rs_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#rs-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('rs-educationalexchange-section-diy-vs-professional-assistance');
  if (rs_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_rio_grande_do_sul_specific_context = document.getElementById('rs-educationalexchange-section-rio-grande-do-sul-specific-context');
  if (rs_educationalexchange_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-educationalexchange-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_what_our_clients_say = document.getElementById('rs-educationalexchange-section-what-our-clients-say');
  if (rs_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#rs-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_frequently_asked_questions = document.getElementById('rs-educationalexchange-section-frequently-asked-questions');
  if (rs_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rs-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_international_support = document.getElementById('rs-educationalexchange-section-international-support');
  if (rs_educationalexchange_section_international_support) {
    gsap.fromTo('#rs-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_our_credentials = document.getElementById('rs-educationalexchange-list-our-credentials');
  if (rs_educationalexchange_list_our_credentials) {
    gsap.from('#rs-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_list_related_services = document.getElementById('rs-educationalexchange-list-related-services');
  if (rs_educationalexchange_list_related_services) {
    gsap.from('#rs-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_youre_in_good_hands = document.getElementById('rs-educationalexchange-section-youre-in-good-hands');
  if (rs_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rs-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_educationalexchange_section_21 = document.getElementById('rs-educationalexchange-section-21');
  if (rs_educationalexchange_section_21) {
    gsap.fromTo('#rs-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('rs-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (rs_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#rs-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #rs-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_quick_facts = document.getElementById('rs-humanitarian-list-quick-facts');
  if (rs_humanitarian_list_quick_facts) {
    gsap.from('#rs-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_common_challenges_applicants_face = document.getElementById('rs-humanitarian-list-common-challenges-applicants-face');
  if (rs_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#rs-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_how_we_solve_these_challenges = document.getElementById('rs-humanitarian-list-how-we-solve-these-challenges');
  if (rs_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#rs-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_residency_overview = document.getElementById('rs-humanitarian-section-residency-overview');
  if (rs_humanitarian_section_residency_overview) {
    gsap.fromTo('#rs-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_form_who_is_this_residency_for = document.getElementById('rs-humanitarian-form-who-is-this-residency-for');
  if (rs_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#rs-humanitarian-form-who-is-this-residency-for input, #rs-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_required_documents = document.getElementById('rs-humanitarian-list-required-documents');
  if (rs_humanitarian_list_required_documents) {
    gsap.from('#rs-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_application_process = document.getElementById('rs-humanitarian-list-application-process');
  if (rs_humanitarian_list_application_process) {
    gsap.from('#rs-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_timelines_deadlines = document.getElementById('rs-humanitarian-section-timelines-deadlines');
  if (rs_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#rs-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_fees_costs = document.getElementById('rs-humanitarian-section-fees-costs');
  if (rs_humanitarian_section_fees_costs) {
    gsap.fromTo('#rs-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_risks_common_mistakes = document.getElementById('rs-humanitarian-list-risks-common-mistakes');
  if (rs_humanitarian_list_risks_common_mistakes) {
    gsap.from('#rs-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_diy_vs_professional_assistance = document.getElementById('rs-humanitarian-section-diy-vs-professional-assistance');
  if (rs_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_rio_grande_do_sul_specific_context = document.getElementById('rs-humanitarian-section-rio-grande-do-sul-specific-context');
  if (rs_humanitarian_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-humanitarian-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_what_our_clients_say = document.getElementById('rs-humanitarian-section-what-our-clients-say');
  if (rs_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#rs-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_frequently_asked_questions = document.getElementById('rs-humanitarian-section-frequently-asked-questions');
  if (rs_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#rs-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_international_support = document.getElementById('rs-humanitarian-section-international-support');
  if (rs_humanitarian_section_international_support) {
    gsap.fromTo('#rs-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_our_credentials = document.getElementById('rs-humanitarian-list-our-credentials');
  if (rs_humanitarian_list_our_credentials) {
    gsap.from('#rs-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_list_related_services = document.getElementById('rs-humanitarian-list-related-services');
  if (rs_humanitarian_list_related_services) {
    gsap.from('#rs-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_youre_in_good_hands = document.getElementById('rs-humanitarian-section-youre-in-good-hands');
  if (rs_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#rs-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_humanitarian_section_21 = document.getElementById('rs-humanitarian-section-21');
  if (rs_humanitarian_section_21) {
    gsap.fromTo('#rs-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('rs-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (rs_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#rs-digitalnomad-form-digital-nomad-residency-in-brazil input, #rs-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_quick_facts = document.getElementById('rs-digitalnomad-list-quick-facts');
  if (rs_digitalnomad_list_quick_facts) {
    gsap.from('#rs-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_common_challenges_applicants_face = document.getElementById('rs-digitalnomad-list-common-challenges-applicants-face');
  if (rs_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#rs-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('rs-digitalnomad-list-how-we-solve-these-challenges');
  if (rs_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#rs-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_residency_overview = document.getElementById('rs-digitalnomad-section-residency-overview');
  if (rs_digitalnomad_section_residency_overview) {
    gsap.fromTo('#rs-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_form_who_is_this_residency_for = document.getElementById('rs-digitalnomad-form-who-is-this-residency-for');
  if (rs_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#rs-digitalnomad-form-who-is-this-residency-for input, #rs-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_required_documents = document.getElementById('rs-digitalnomad-list-required-documents');
  if (rs_digitalnomad_list_required_documents) {
    gsap.from('#rs-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_application_process = document.getElementById('rs-digitalnomad-list-application-process');
  if (rs_digitalnomad_list_application_process) {
    gsap.from('#rs-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_timelines_deadlines = document.getElementById('rs-digitalnomad-section-timelines-deadlines');
  if (rs_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#rs-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_fees_costs = document.getElementById('rs-digitalnomad-section-fees-costs');
  if (rs_digitalnomad_section_fees_costs) {
    gsap.fromTo('#rs-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_risks_common_mistakes = document.getElementById('rs-digitalnomad-list-risks-common-mistakes');
  if (rs_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#rs-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('rs-digitalnomad-section-diy-vs-professional-assistance');
  if (rs_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_rio_grande_do_sul_specific_context = document.getElementById('rs-digitalnomad-section-rio-grande-do-sul-specific-context');
  if (rs_digitalnomad_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-digitalnomad-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_what_our_clients_say = document.getElementById('rs-digitalnomad-section-what-our-clients-say');
  if (rs_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#rs-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_frequently_asked_questions = document.getElementById('rs-digitalnomad-section-frequently-asked-questions');
  if (rs_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#rs-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_international_support = document.getElementById('rs-digitalnomad-section-international-support');
  if (rs_digitalnomad_section_international_support) {
    gsap.fromTo('#rs-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_our_credentials = document.getElementById('rs-digitalnomad-list-our-credentials');
  if (rs_digitalnomad_list_our_credentials) {
    gsap.from('#rs-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_list_related_services = document.getElementById('rs-digitalnomad-list-related-services');
  if (rs_digitalnomad_list_related_services) {
    gsap.from('#rs-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_youre_in_good_hands = document.getElementById('rs-digitalnomad-section-youre-in-good-hands');
  if (rs_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#rs-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_digitalnomad_section_21 = document.getElementById('rs-digitalnomad-section-21');
  if (rs_digitalnomad_section_21) {
    gsap.fromTo('#rs-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('rs-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (rs_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#rs-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #rs-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_quick_facts = document.getElementById('rs-familyreunion-list-quick-facts');
  if (rs_familyreunion_list_quick_facts) {
    gsap.from('#rs-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_common_challenges_applicants_face = document.getElementById('rs-familyreunion-list-common-challenges-applicants-face');
  if (rs_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#rs-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_how_we_solve_these_challenges = document.getElementById('rs-familyreunion-list-how-we-solve-these-challenges');
  if (rs_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#rs-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_residency_overview = document.getElementById('rs-familyreunion-section-residency-overview');
  if (rs_familyreunion_section_residency_overview) {
    gsap.fromTo('#rs-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_form_who_is_this_residency_for = document.getElementById('rs-familyreunion-form-who-is-this-residency-for');
  if (rs_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#rs-familyreunion-form-who-is-this-residency-for input, #rs-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_required_documents = document.getElementById('rs-familyreunion-list-required-documents');
  if (rs_familyreunion_list_required_documents) {
    gsap.from('#rs-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_application_process = document.getElementById('rs-familyreunion-list-application-process');
  if (rs_familyreunion_list_application_process) {
    gsap.from('#rs-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_timelines_deadlines = document.getElementById('rs-familyreunion-section-timelines-deadlines');
  if (rs_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#rs-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_fees_costs = document.getElementById('rs-familyreunion-section-fees-costs');
  if (rs_familyreunion_section_fees_costs) {
    gsap.fromTo('#rs-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_risks_common_mistakes = document.getElementById('rs-familyreunion-list-risks-common-mistakes');
  if (rs_familyreunion_list_risks_common_mistakes) {
    gsap.from('#rs-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_diy_vs_professional_assistance = document.getElementById('rs-familyreunion-section-diy-vs-professional-assistance');
  if (rs_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_rio_grande_do_sul_specific_context = document.getElementById('rs-familyreunion-section-rio-grande-do-sul-specific-context');
  if (rs_familyreunion_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-familyreunion-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_what_our_clients_say = document.getElementById('rs-familyreunion-section-what-our-clients-say');
  if (rs_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#rs-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_frequently_asked_questions = document.getElementById('rs-familyreunion-section-frequently-asked-questions');
  if (rs_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#rs-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_international_support = document.getElementById('rs-familyreunion-section-international-support');
  if (rs_familyreunion_section_international_support) {
    gsap.fromTo('#rs-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_our_credentials = document.getElementById('rs-familyreunion-list-our-credentials');
  if (rs_familyreunion_list_our_credentials) {
    gsap.from('#rs-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_list_related_services = document.getElementById('rs-familyreunion-list-related-services');
  if (rs_familyreunion_list_related_services) {
    gsap.from('#rs-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_youre_in_good_hands = document.getElementById('rs-familyreunion-section-youre-in-good-hands');
  if (rs_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#rs-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_familyreunion_section_21 = document.getElementById('rs-familyreunion-section-21');
  if (rs_familyreunion_section_21) {
    gsap.fromTo('#rs-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('rs-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (rs_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#rs-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #rs-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_quick_facts = document.getElementById('rs-mercosul-list-quick-facts');
  if (rs_mercosul_list_quick_facts) {
    gsap.from('#rs-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_common_challenges_applicants_face = document.getElementById('rs-mercosul-list-common-challenges-applicants-face');
  if (rs_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#rs-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_how_we_solve_these_challenges = document.getElementById('rs-mercosul-list-how-we-solve-these-challenges');
  if (rs_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#rs-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_residency_overview = document.getElementById('rs-mercosul-section-residency-overview');
  if (rs_mercosul_section_residency_overview) {
    gsap.fromTo('#rs-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_form_who_is_this_residency_for = document.getElementById('rs-mercosul-form-who-is-this-residency-for');
  if (rs_mercosul_form_who_is_this_residency_for) {
    gsap.from('#rs-mercosul-form-who-is-this-residency-for input, #rs-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_required_documents = document.getElementById('rs-mercosul-list-required-documents');
  if (rs_mercosul_list_required_documents) {
    gsap.from('#rs-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_application_process = document.getElementById('rs-mercosul-list-application-process');
  if (rs_mercosul_list_application_process) {
    gsap.from('#rs-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_timelines_deadlines = document.getElementById('rs-mercosul-section-timelines-deadlines');
  if (rs_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#rs-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_fees_costs = document.getElementById('rs-mercosul-section-fees-costs');
  if (rs_mercosul_section_fees_costs) {
    gsap.fromTo('#rs-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_risks_common_mistakes = document.getElementById('rs-mercosul-list-risks-common-mistakes');
  if (rs_mercosul_list_risks_common_mistakes) {
    gsap.from('#rs-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_diy_vs_professional_assistance = document.getElementById('rs-mercosul-section-diy-vs-professional-assistance');
  if (rs_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_rio_grande_do_sul_specific_context = document.getElementById('rs-mercosul-section-rio-grande-do-sul-specific-context');
  if (rs_mercosul_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-mercosul-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_what_our_clients_say = document.getElementById('rs-mercosul-section-what-our-clients-say');
  if (rs_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#rs-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_frequently_asked_questions = document.getElementById('rs-mercosul-section-frequently-asked-questions');
  if (rs_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#rs-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_international_support = document.getElementById('rs-mercosul-section-international-support');
  if (rs_mercosul_section_international_support) {
    gsap.fromTo('#rs-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_our_credentials = document.getElementById('rs-mercosul-list-our-credentials');
  if (rs_mercosul_list_our_credentials) {
    gsap.from('#rs-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_list_related_services = document.getElementById('rs-mercosul-list-related-services');
  if (rs_mercosul_list_related_services) {
    gsap.from('#rs-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_youre_in_good_hands = document.getElementById('rs-mercosul-section-youre-in-good-hands');
  if (rs_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#rs-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_mercosul_section_21 = document.getElementById('rs-mercosul-section-21');
  if (rs_mercosul_section_21) {
    gsap.fromTo('#rs-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('rs-retiree-form-retire-in-brazil-with-retiree-residency');
  if (rs_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#rs-retiree-form-retire-in-brazil-with-retiree-residency input, #rs-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_quick_facts = document.getElementById('rs-retiree-list-quick-facts');
  if (rs_retiree_list_quick_facts) {
    gsap.from('#rs-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_common_challenges_applicants_face = document.getElementById('rs-retiree-list-common-challenges-applicants-face');
  if (rs_retiree_list_common_challenges_applicants_face) {
    gsap.from('#rs-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_how_we_solve_these_challenges = document.getElementById('rs-retiree-list-how-we-solve-these-challenges');
  if (rs_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#rs-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_residency_overview = document.getElementById('rs-retiree-section-residency-overview');
  if (rs_retiree_section_residency_overview) {
    gsap.fromTo('#rs-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_form_who_is_this_residency_for = document.getElementById('rs-retiree-form-who-is-this-residency-for');
  if (rs_retiree_form_who_is_this_residency_for) {
    gsap.from('#rs-retiree-form-who-is-this-residency-for input, #rs-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_required_documents = document.getElementById('rs-retiree-list-required-documents');
  if (rs_retiree_list_required_documents) {
    gsap.from('#rs-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_application_process = document.getElementById('rs-retiree-list-application-process');
  if (rs_retiree_list_application_process) {
    gsap.from('#rs-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_timelines_deadlines = document.getElementById('rs-retiree-section-timelines-deadlines');
  if (rs_retiree_section_timelines_deadlines) {
    gsap.fromTo('#rs-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_fees_costs = document.getElementById('rs-retiree-section-fees-costs');
  if (rs_retiree_section_fees_costs) {
    gsap.fromTo('#rs-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_risks_common_mistakes = document.getElementById('rs-retiree-list-risks-common-mistakes');
  if (rs_retiree_list_risks_common_mistakes) {
    gsap.from('#rs-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_diy_vs_professional_assistance = document.getElementById('rs-retiree-section-diy-vs-professional-assistance');
  if (rs_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_rio_grande_do_sul_specific_context = document.getElementById('rs-retiree-section-rio-grande-do-sul-specific-context');
  if (rs_retiree_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-retiree-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_what_our_clients_say = document.getElementById('rs-retiree-section-what-our-clients-say');
  if (rs_retiree_section_what_our_clients_say) {
    gsap.fromTo('#rs-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_frequently_asked_questions = document.getElementById('rs-retiree-section-frequently-asked-questions');
  if (rs_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#rs-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_international_support = document.getElementById('rs-retiree-section-international-support');
  if (rs_retiree_section_international_support) {
    gsap.fromTo('#rs-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_our_credentials = document.getElementById('rs-retiree-list-our-credentials');
  if (rs_retiree_list_our_credentials) {
    gsap.from('#rs-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_list_related_services = document.getElementById('rs-retiree-list-related-services');
  if (rs_retiree_list_related_services) {
    gsap.from('#rs-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_youre_in_good_hands = document.getElementById('rs-retiree-section-youre-in-good-hands');
  if (rs_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#rs-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_retiree_section_21 = document.getElementById('rs-retiree-section-21');
  if (rs_retiree_section_21) {
    gsap.fromTo('#rs-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('rs-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (rs_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#rs-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #rs-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_quick_facts = document.getElementById('rs-volunteer-list-quick-facts');
  if (rs_volunteer_list_quick_facts) {
    gsap.from('#rs-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_common_challenges_applicants_face = document.getElementById('rs-volunteer-list-common-challenges-applicants-face');
  if (rs_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#rs-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_how_we_solve_these_challenges = document.getElementById('rs-volunteer-list-how-we-solve-these-challenges');
  if (rs_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#rs-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_residency_overview = document.getElementById('rs-volunteer-section-residency-overview');
  if (rs_volunteer_section_residency_overview) {
    gsap.fromTo('#rs-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_form_who_is_this_residency_for = document.getElementById('rs-volunteer-form-who-is-this-residency-for');
  if (rs_volunteer_form_who_is_this_residency_for) {
    gsap.from('#rs-volunteer-form-who-is-this-residency-for input, #rs-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_required_documents = document.getElementById('rs-volunteer-list-required-documents');
  if (rs_volunteer_list_required_documents) {
    gsap.from('#rs-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_application_process = document.getElementById('rs-volunteer-list-application-process');
  if (rs_volunteer_list_application_process) {
    gsap.from('#rs-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_timelines_deadlines = document.getElementById('rs-volunteer-section-timelines-deadlines');
  if (rs_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#rs-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_fees_costs = document.getElementById('rs-volunteer-section-fees-costs');
  if (rs_volunteer_section_fees_costs) {
    gsap.fromTo('#rs-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_risks_common_mistakes = document.getElementById('rs-volunteer-list-risks-common-mistakes');
  if (rs_volunteer_list_risks_common_mistakes) {
    gsap.from('#rs-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_diy_vs_professional_assistance = document.getElementById('rs-volunteer-section-diy-vs-professional-assistance');
  if (rs_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_rio_grande_do_sul_specific_context = document.getElementById('rs-volunteer-section-rio-grande-do-sul-specific-context');
  if (rs_volunteer_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-volunteer-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_what_our_clients_say = document.getElementById('rs-volunteer-section-what-our-clients-say');
  if (rs_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#rs-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_frequently_asked_questions = document.getElementById('rs-volunteer-section-frequently-asked-questions');
  if (rs_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#rs-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_international_support = document.getElementById('rs-volunteer-section-international-support');
  if (rs_volunteer_section_international_support) {
    gsap.fromTo('#rs-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_our_credentials = document.getElementById('rs-volunteer-list-our-credentials');
  if (rs_volunteer_list_our_credentials) {
    gsap.from('#rs-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_list_related_services = document.getElementById('rs-volunteer-list-related-services');
  if (rs_volunteer_list_related_services) {
    gsap.from('#rs-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_youre_in_good_hands = document.getElementById('rs-volunteer-section-youre-in-good-hands');
  if (rs_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#rs-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_volunteer_section_21 = document.getElementById('rs-volunteer-section-21');
  if (rs_volunteer_section_21) {
    gsap.fromTo('#rs-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('rs-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (rs_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#rs-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #rs-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_quick_facts = document.getElementById('rs-skilledworker-list-quick-facts');
  if (rs_skilledworker_list_quick_facts) {
    gsap.from('#rs-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_common_challenges_applicants_face = document.getElementById('rs-skilledworker-list-common-challenges-applicants-face');
  if (rs_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#rs-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_how_we_solve_these_challenges = document.getElementById('rs-skilledworker-list-how-we-solve-these-challenges');
  if (rs_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#rs-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_residency_overview = document.getElementById('rs-skilledworker-section-residency-overview');
  if (rs_skilledworker_section_residency_overview) {
    gsap.fromTo('#rs-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_form_who_is_this_residency_for = document.getElementById('rs-skilledworker-form-who-is-this-residency-for');
  if (rs_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#rs-skilledworker-form-who-is-this-residency-for input, #rs-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_required_documents = document.getElementById('rs-skilledworker-list-required-documents');
  if (rs_skilledworker_list_required_documents) {
    gsap.from('#rs-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_application_process = document.getElementById('rs-skilledworker-list-application-process');
  if (rs_skilledworker_list_application_process) {
    gsap.from('#rs-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_timelines_deadlines = document.getElementById('rs-skilledworker-section-timelines-deadlines');
  if (rs_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#rs-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_fees_costs = document.getElementById('rs-skilledworker-section-fees-costs');
  if (rs_skilledworker_section_fees_costs) {
    gsap.fromTo('#rs-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_risks_common_mistakes = document.getElementById('rs-skilledworker-list-risks-common-mistakes');
  if (rs_skilledworker_list_risks_common_mistakes) {
    gsap.from('#rs-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_diy_vs_professional_assistance = document.getElementById('rs-skilledworker-section-diy-vs-professional-assistance');
  if (rs_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_rio_grande_do_sul_specific_context = document.getElementById('rs-skilledworker-section-rio-grande-do-sul-specific-context');
  if (rs_skilledworker_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-skilledworker-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_what_our_clients_say = document.getElementById('rs-skilledworker-section-what-our-clients-say');
  if (rs_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#rs-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_frequently_asked_questions = document.getElementById('rs-skilledworker-section-frequently-asked-questions');
  if (rs_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#rs-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_international_support = document.getElementById('rs-skilledworker-section-international-support');
  if (rs_skilledworker_section_international_support) {
    gsap.fromTo('#rs-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_our_credentials = document.getElementById('rs-skilledworker-list-our-credentials');
  if (rs_skilledworker_list_our_credentials) {
    gsap.from('#rs-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_list_related_services = document.getElementById('rs-skilledworker-list-related-services');
  if (rs_skilledworker_list_related_services) {
    gsap.from('#rs-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_youre_in_good_hands = document.getElementById('rs-skilledworker-section-youre-in-good-hands');
  if (rs_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#rs-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_skilledworker_section_21 = document.getElementById('rs-skilledworker-section-21');
  if (rs_skilledworker_section_21) {
    gsap.fromTo('#rs-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('rs-religious-form-religious-residency-in-brazil-for-missions');
  if (rs_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#rs-religious-form-religious-residency-in-brazil-for-missions input, #rs-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_quick_facts = document.getElementById('rs-religious-list-quick-facts');
  if (rs_religious_list_quick_facts) {
    gsap.from('#rs-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_common_challenges_applicants_face = document.getElementById('rs-religious-list-common-challenges-applicants-face');
  if (rs_religious_list_common_challenges_applicants_face) {
    gsap.from('#rs-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_how_we_solve_these_challenges = document.getElementById('rs-religious-list-how-we-solve-these-challenges');
  if (rs_religious_list_how_we_solve_these_challenges) {
    gsap.from('#rs-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_residency_overview = document.getElementById('rs-religious-section-residency-overview');
  if (rs_religious_section_residency_overview) {
    gsap.fromTo('#rs-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_form_who_is_this_residency_for = document.getElementById('rs-religious-form-who-is-this-residency-for');
  if (rs_religious_form_who_is_this_residency_for) {
    gsap.from('#rs-religious-form-who-is-this-residency-for input, #rs-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_required_documents = document.getElementById('rs-religious-list-required-documents');
  if (rs_religious_list_required_documents) {
    gsap.from('#rs-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_application_process = document.getElementById('rs-religious-list-application-process');
  if (rs_religious_list_application_process) {
    gsap.from('#rs-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_timelines_deadlines = document.getElementById('rs-religious-section-timelines-deadlines');
  if (rs_religious_section_timelines_deadlines) {
    gsap.fromTo('#rs-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_fees_costs = document.getElementById('rs-religious-section-fees-costs');
  if (rs_religious_section_fees_costs) {
    gsap.fromTo('#rs-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_risks_common_mistakes = document.getElementById('rs-religious-list-risks-common-mistakes');
  if (rs_religious_list_risks_common_mistakes) {
    gsap.from('#rs-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_diy_vs_professional_assistance = document.getElementById('rs-religious-section-diy-vs-professional-assistance');
  if (rs_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_rio_grande_do_sul_specific_context = document.getElementById('rs-religious-section-rio-grande-do-sul-specific-context');
  if (rs_religious_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-religious-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_what_our_clients_say = document.getElementById('rs-religious-section-what-our-clients-say');
  if (rs_religious_section_what_our_clients_say) {
    gsap.fromTo('#rs-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_frequently_asked_questions = document.getElementById('rs-religious-section-frequently-asked-questions');
  if (rs_religious_section_frequently_asked_questions) {
    gsap.fromTo('#rs-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_international_support = document.getElementById('rs-religious-section-international-support');
  if (rs_religious_section_international_support) {
    gsap.fromTo('#rs-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_our_credentials = document.getElementById('rs-religious-list-our-credentials');
  if (rs_religious_list_our_credentials) {
    gsap.from('#rs-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_list_related_services = document.getElementById('rs-religious-list-related-services');
  if (rs_religious_list_related_services) {
    gsap.from('#rs-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_youre_in_good_hands = document.getElementById('rs-religious-section-youre-in-good-hands');
  if (rs_religious_section_youre_in_good_hands) {
    gsap.fromTo('#rs-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_religious_section_21 = document.getElementById('rs-religious-section-21');
  if (rs_religious_section_21) {
    gsap.fromTo('#rs-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('rs-investor-form-gain-residency-in-brazil-through-investment');
  if (rs_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#rs-investor-form-gain-residency-in-brazil-through-investment input, #rs-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_quick_facts = document.getElementById('rs-investor-list-quick-facts');
  if (rs_investor_list_quick_facts) {
    gsap.from('#rs-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_common_challenges_applicants_face = document.getElementById('rs-investor-list-common-challenges-applicants-face');
  if (rs_investor_list_common_challenges_applicants_face) {
    gsap.from('#rs-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_how_we_solve_these_challenges = document.getElementById('rs-investor-list-how-we-solve-these-challenges');
  if (rs_investor_list_how_we_solve_these_challenges) {
    gsap.from('#rs-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_residency_overview = document.getElementById('rs-investor-section-residency-overview');
  if (rs_investor_section_residency_overview) {
    gsap.fromTo('#rs-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_form_who_is_this_residency_for = document.getElementById('rs-investor-form-who-is-this-residency-for');
  if (rs_investor_form_who_is_this_residency_for) {
    gsap.from('#rs-investor-form-who-is-this-residency-for input, #rs-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_required_documents = document.getElementById('rs-investor-list-required-documents');
  if (rs_investor_list_required_documents) {
    gsap.from('#rs-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_application_process = document.getElementById('rs-investor-list-application-process');
  if (rs_investor_list_application_process) {
    gsap.from('#rs-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_timelines_deadlines = document.getElementById('rs-investor-section-timelines-deadlines');
  if (rs_investor_section_timelines_deadlines) {
    gsap.fromTo('#rs-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_fees_costs = document.getElementById('rs-investor-section-fees-costs');
  if (rs_investor_section_fees_costs) {
    gsap.fromTo('#rs-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_risks_common_mistakes = document.getElementById('rs-investor-list-risks-common-mistakes');
  if (rs_investor_list_risks_common_mistakes) {
    gsap.from('#rs-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_diy_vs_professional_assistance = document.getElementById('rs-investor-section-diy-vs-professional-assistance');
  if (rs_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_rio_grande_do_sul_specific_context = document.getElementById('rs-investor-section-rio-grande-do-sul-specific-context');
  if (rs_investor_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-investor-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_what_our_clients_say = document.getElementById('rs-investor-section-what-our-clients-say');
  if (rs_investor_section_what_our_clients_say) {
    gsap.fromTo('#rs-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_frequently_asked_questions = document.getElementById('rs-investor-section-frequently-asked-questions');
  if (rs_investor_section_frequently_asked_questions) {
    gsap.fromTo('#rs-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_international_support = document.getElementById('rs-investor-section-international-support');
  if (rs_investor_section_international_support) {
    gsap.fromTo('#rs-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_our_credentials = document.getElementById('rs-investor-list-our-credentials');
  if (rs_investor_list_our_credentials) {
    gsap.from('#rs-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_list_related_services = document.getElementById('rs-investor-list-related-services');
  if (rs_investor_list_related_services) {
    gsap.from('#rs-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_youre_in_good_hands = document.getElementById('rs-investor-section-youre-in-good-hands');
  if (rs_investor_section_youre_in_good_hands) {
    gsap.fromTo('#rs-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_investor_section_21 = document.getElementById('rs-investor-section-21');
  if (rs_investor_section_21) {
    gsap.fromTo('#rs-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('rs-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (rs_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#rs-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #rs-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_quick_facts = document.getElementById('rs-healthtreatment-list-quick-facts');
  if (rs_healthtreatment_list_quick_facts) {
    gsap.from('#rs-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_common_challenges_applicants_face = document.getElementById('rs-healthtreatment-list-common-challenges-applicants-face');
  if (rs_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#rs-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('rs-healthtreatment-list-how-we-solve-these-challenges');
  if (rs_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#rs-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_residency_overview = document.getElementById('rs-healthtreatment-section-residency-overview');
  if (rs_healthtreatment_section_residency_overview) {
    gsap.fromTo('#rs-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_form_who_is_this_residency_for = document.getElementById('rs-healthtreatment-form-who-is-this-residency-for');
  if (rs_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#rs-healthtreatment-form-who-is-this-residency-for input, #rs-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_required_documents = document.getElementById('rs-healthtreatment-list-required-documents');
  if (rs_healthtreatment_list_required_documents) {
    gsap.from('#rs-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_application_process = document.getElementById('rs-healthtreatment-list-application-process');
  if (rs_healthtreatment_list_application_process) {
    gsap.from('#rs-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_timelines_deadlines = document.getElementById('rs-healthtreatment-section-timelines-deadlines');
  if (rs_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#rs-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_fees_costs = document.getElementById('rs-healthtreatment-section-fees-costs');
  if (rs_healthtreatment_section_fees_costs) {
    gsap.fromTo('#rs-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_risks_common_mistakes = document.getElementById('rs-healthtreatment-list-risks-common-mistakes');
  if (rs_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#rs-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('rs-healthtreatment-section-diy-vs-professional-assistance');
  if (rs_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_rio_grande_do_sul_specific_context = document.getElementById('rs-healthtreatment-section-rio-grande-do-sul-specific-context');
  if (rs_healthtreatment_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-healthtreatment-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_what_our_clients_say = document.getElementById('rs-healthtreatment-section-what-our-clients-say');
  if (rs_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#rs-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_frequently_asked_questions = document.getElementById('rs-healthtreatment-section-frequently-asked-questions');
  if (rs_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#rs-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_international_support = document.getElementById('rs-healthtreatment-section-international-support');
  if (rs_healthtreatment_section_international_support) {
    gsap.fromTo('#rs-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_our_credentials = document.getElementById('rs-healthtreatment-list-our-credentials');
  if (rs_healthtreatment_list_our_credentials) {
    gsap.from('#rs-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_list_related_services = document.getElementById('rs-healthtreatment-list-related-services');
  if (rs_healthtreatment_list_related_services) {
    gsap.from('#rs-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_youre_in_good_hands = document.getElementById('rs-healthtreatment-section-youre-in-good-hands');
  if (rs_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#rs-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_healthtreatment_section_21 = document.getElementById('rs-healthtreatment-section-21');
  if (rs_healthtreatment_section_21) {
    gsap.fromTo('#rs-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('rs-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (rs_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#rs-cplp-form-residency-for-cplp-citizens-in-brazil input, #rs-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_quick_facts = document.getElementById('rs-cplp-list-quick-facts');
  if (rs_cplp_list_quick_facts) {
    gsap.from('#rs-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_common_challenges_applicants_face = document.getElementById('rs-cplp-list-common-challenges-applicants-face');
  if (rs_cplp_list_common_challenges_applicants_face) {
    gsap.from('#rs-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_how_we_solve_these_challenges = document.getElementById('rs-cplp-list-how-we-solve-these-challenges');
  if (rs_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#rs-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_residency_overview = document.getElementById('rs-cplp-section-residency-overview');
  if (rs_cplp_section_residency_overview) {
    gsap.fromTo('#rs-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_form_who_is_this_residency_for = document.getElementById('rs-cplp-form-who-is-this-residency-for');
  if (rs_cplp_form_who_is_this_residency_for) {
    gsap.from('#rs-cplp-form-who-is-this-residency-for input, #rs-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_required_documents = document.getElementById('rs-cplp-list-required-documents');
  if (rs_cplp_list_required_documents) {
    gsap.from('#rs-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_application_process = document.getElementById('rs-cplp-list-application-process');
  if (rs_cplp_list_application_process) {
    gsap.from('#rs-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_timelines_deadlines = document.getElementById('rs-cplp-section-timelines-deadlines');
  if (rs_cplp_section_timelines_deadlines) {
    gsap.fromTo('#rs-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_fees_costs = document.getElementById('rs-cplp-section-fees-costs');
  if (rs_cplp_section_fees_costs) {
    gsap.fromTo('#rs-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_risks_common_mistakes = document.getElementById('rs-cplp-list-risks-common-mistakes');
  if (rs_cplp_list_risks_common_mistakes) {
    gsap.from('#rs-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_diy_vs_professional_assistance = document.getElementById('rs-cplp-section-diy-vs-professional-assistance');
  if (rs_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_rio_grande_do_sul_specific_context = document.getElementById('rs-cplp-section-rio-grande-do-sul-specific-context');
  if (rs_cplp_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-cplp-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_what_our_clients_say = document.getElementById('rs-cplp-section-what-our-clients-say');
  if (rs_cplp_section_what_our_clients_say) {
    gsap.fromTo('#rs-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_frequently_asked_questions = document.getElementById('rs-cplp-section-frequently-asked-questions');
  if (rs_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#rs-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_international_support = document.getElementById('rs-cplp-section-international-support');
  if (rs_cplp_section_international_support) {
    gsap.fromTo('#rs-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_our_credentials = document.getElementById('rs-cplp-list-our-credentials');
  if (rs_cplp_list_our_credentials) {
    gsap.from('#rs-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_list_related_services = document.getElementById('rs-cplp-list-related-services');
  if (rs_cplp_list_related_services) {
    gsap.from('#rs-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_youre_in_good_hands = document.getElementById('rs-cplp-section-youre-in-good-hands');
  if (rs_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#rs-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_cplp_section_21 = document.getElementById('rs-cplp-section-21');
  if (rs_cplp_section_21) {
    gsap.fromTo('#rs-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('rs-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (rs_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#rs-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #rs-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_quick_facts = document.getElementById('rs-youthexchange-list-quick-facts');
  if (rs_youthexchange_list_quick_facts) {
    gsap.from('#rs-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_common_challenges_applicants_face = document.getElementById('rs-youthexchange-list-common-challenges-applicants-face');
  if (rs_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#rs-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_how_we_solve_these_challenges = document.getElementById('rs-youthexchange-list-how-we-solve-these-challenges');
  if (rs_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rs-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_residency_overview = document.getElementById('rs-youthexchange-section-residency-overview');
  if (rs_youthexchange_section_residency_overview) {
    gsap.fromTo('#rs-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_form_who_is_this_residency_for = document.getElementById('rs-youthexchange-form-who-is-this-residency-for');
  if (rs_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#rs-youthexchange-form-who-is-this-residency-for input, #rs-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_required_documents = document.getElementById('rs-youthexchange-list-required-documents');
  if (rs_youthexchange_list_required_documents) {
    gsap.from('#rs-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_application_process = document.getElementById('rs-youthexchange-list-application-process');
  if (rs_youthexchange_list_application_process) {
    gsap.from('#rs-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_timelines_deadlines = document.getElementById('rs-youthexchange-section-timelines-deadlines');
  if (rs_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#rs-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_fees_costs = document.getElementById('rs-youthexchange-section-fees-costs');
  if (rs_youthexchange_section_fees_costs) {
    gsap.fromTo('#rs-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_risks_common_mistakes = document.getElementById('rs-youthexchange-list-risks-common-mistakes');
  if (rs_youthexchange_list_risks_common_mistakes) {
    gsap.from('#rs-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_diy_vs_professional_assistance = document.getElementById('rs-youthexchange-section-diy-vs-professional-assistance');
  if (rs_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_rio_grande_do_sul_specific_context = document.getElementById('rs-youthexchange-section-rio-grande-do-sul-specific-context');
  if (rs_youthexchange_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-youthexchange-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_what_our_clients_say = document.getElementById('rs-youthexchange-section-what-our-clients-say');
  if (rs_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#rs-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_frequently_asked_questions = document.getElementById('rs-youthexchange-section-frequently-asked-questions');
  if (rs_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rs-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_international_support = document.getElementById('rs-youthexchange-section-international-support');
  if (rs_youthexchange_section_international_support) {
    gsap.fromTo('#rs-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_our_credentials = document.getElementById('rs-youthexchange-list-our-credentials');
  if (rs_youthexchange_list_our_credentials) {
    gsap.from('#rs-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_list_related_services = document.getElementById('rs-youthexchange-list-related-services');
  if (rs_youthexchange_list_related_services) {
    gsap.from('#rs-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_youre_in_good_hands = document.getElementById('rs-youthexchange-section-youre-in-good-hands');
  if (rs_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rs-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_youthexchange_section_21 = document.getElementById('rs-youthexchange-section-21');
  if (rs_youthexchange_section_21) {
    gsap.fromTo('#rs-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('rs-work-form-work-and-reside-in-brazil-with-work-residency');
  if (rs_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#rs-work-form-work-and-reside-in-brazil-with-work-residency input, #rs-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_quick_facts = document.getElementById('rs-work-list-quick-facts');
  if (rs_work_list_quick_facts) {
    gsap.from('#rs-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_common_challenges_applicants_face = document.getElementById('rs-work-list-common-challenges-applicants-face');
  if (rs_work_list_common_challenges_applicants_face) {
    gsap.from('#rs-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_how_we_solve_these_challenges = document.getElementById('rs-work-list-how-we-solve-these-challenges');
  if (rs_work_list_how_we_solve_these_challenges) {
    gsap.from('#rs-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_residency_overview = document.getElementById('rs-work-section-residency-overview');
  if (rs_work_section_residency_overview) {
    gsap.fromTo('#rs-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_form_who_is_this_residency_for = document.getElementById('rs-work-form-who-is-this-residency-for');
  if (rs_work_form_who_is_this_residency_for) {
    gsap.from('#rs-work-form-who-is-this-residency-for input, #rs-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_required_documents = document.getElementById('rs-work-list-required-documents');
  if (rs_work_list_required_documents) {
    gsap.from('#rs-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_application_process = document.getElementById('rs-work-list-application-process');
  if (rs_work_list_application_process) {
    gsap.from('#rs-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_timelines_deadlines = document.getElementById('rs-work-section-timelines-deadlines');
  if (rs_work_section_timelines_deadlines) {
    gsap.fromTo('#rs-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_fees_costs = document.getElementById('rs-work-section-fees-costs');
  if (rs_work_section_fees_costs) {
    gsap.fromTo('#rs-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_risks_common_mistakes = document.getElementById('rs-work-list-risks-common-mistakes');
  if (rs_work_list_risks_common_mistakes) {
    gsap.from('#rs-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_diy_vs_professional_assistance = document.getElementById('rs-work-section-diy-vs-professional-assistance');
  if (rs_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_rio_grande_do_sul_specific_context = document.getElementById('rs-work-section-rio-grande-do-sul-specific-context');
  if (rs_work_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-work-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_what_our_clients_say = document.getElementById('rs-work-section-what-our-clients-say');
  if (rs_work_section_what_our_clients_say) {
    gsap.fromTo('#rs-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_frequently_asked_questions = document.getElementById('rs-work-section-frequently-asked-questions');
  if (rs_work_section_frequently_asked_questions) {
    gsap.fromTo('#rs-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_international_support = document.getElementById('rs-work-section-international-support');
  if (rs_work_section_international_support) {
    gsap.fromTo('#rs-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_our_credentials = document.getElementById('rs-work-list-our-credentials');
  if (rs_work_list_our_credentials) {
    gsap.from('#rs-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_list_related_services = document.getElementById('rs-work-list-related-services');
  if (rs_work_list_related_services) {
    gsap.from('#rs-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_youre_in_good_hands = document.getElementById('rs-work-section-youre-in-good-hands');
  if (rs_work_section_youre_in_good_hands) {
    gsap.fromTo('#rs-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_work_section_21 = document.getElementById('rs-work-section-21');
  if (rs_work_section_21) {
    gsap.fromTo('#rs-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('rs-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (rs_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#rs-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #rs-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_quick_facts = document.getElementById('rs-startup-list-quick-facts');
  if (rs_startup_list_quick_facts) {
    gsap.from('#rs-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_common_challenges_applicants_face = document.getElementById('rs-startup-list-common-challenges-applicants-face');
  if (rs_startup_list_common_challenges_applicants_face) {
    gsap.from('#rs-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_how_we_solve_these_challenges = document.getElementById('rs-startup-list-how-we-solve-these-challenges');
  if (rs_startup_list_how_we_solve_these_challenges) {
    gsap.from('#rs-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_visa_overview = document.getElementById('rs-startup-section-visa-overview');
  if (rs_startup_section_visa_overview) {
    gsap.fromTo('#rs-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_form_who_is_this_visa_for = document.getElementById('rs-startup-form-who-is-this-visa-for');
  if (rs_startup_form_who_is_this_visa_for) {
    gsap.from('#rs-startup-form-who-is-this-visa-for input, #rs-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_required_documents = document.getElementById('rs-startup-list-required-documents');
  if (rs_startup_list_required_documents) {
    gsap.from('#rs-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_application_process = document.getElementById('rs-startup-list-application-process');
  if (rs_startup_list_application_process) {
    gsap.from('#rs-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_timelines_deadlines = document.getElementById('rs-startup-section-timelines-deadlines');
  if (rs_startup_section_timelines_deadlines) {
    gsap.fromTo('#rs-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_fees_costs = document.getElementById('rs-startup-section-fees-costs');
  if (rs_startup_section_fees_costs) {
    gsap.fromTo('#rs-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_risks_common_mistakes = document.getElementById('rs-startup-list-risks-common-mistakes');
  if (rs_startup_list_risks_common_mistakes) {
    gsap.from('#rs-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_diy_vs_professional_assistance = document.getElementById('rs-startup-section-diy-vs-professional-assistance');
  if (rs_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_rio_grande_do_sul_specific_context = document.getElementById('rs-startup-section-rio-grande-do-sul-specific-context');
  if (rs_startup_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-startup-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_what_our_clients_say = document.getElementById('rs-startup-section-what-our-clients-say');
  if (rs_startup_section_what_our_clients_say) {
    gsap.fromTo('#rs-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_frequently_asked_questions = document.getElementById('rs-startup-section-frequently-asked-questions');
  if (rs_startup_section_frequently_asked_questions) {
    gsap.fromTo('#rs-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_international_support = document.getElementById('rs-startup-section-international-support');
  if (rs_startup_section_international_support) {
    gsap.fromTo('#rs-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_our_credentials = document.getElementById('rs-startup-list-our-credentials');
  if (rs_startup_list_our_credentials) {
    gsap.from('#rs-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_list_related_services = document.getElementById('rs-startup-list-related-services');
  if (rs_startup_list_related_services) {
    gsap.from('#rs-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_youre_in_good_hands = document.getElementById('rs-startup-section-youre-in-good-hands');
  if (rs_startup_section_youre_in_good_hands) {
    gsap.fromTo('#rs-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_startup_section_21 = document.getElementById('rs-startup-section-21');
  if (rs_startup_section_21) {
    gsap.fromTo('#rs-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('rs-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (rs_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#rs-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #rs-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_quick_facts = document.getElementById('rs-family-list-quick-facts');
  if (rs_family_list_quick_facts) {
    gsap.from('#rs-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_common_challenges_applicants_face = document.getElementById('rs-family-list-common-challenges-applicants-face');
  if (rs_family_list_common_challenges_applicants_face) {
    gsap.from('#rs-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_how_we_solve_these_challenges = document.getElementById('rs-family-list-how-we-solve-these-challenges');
  if (rs_family_list_how_we_solve_these_challenges) {
    gsap.from('#rs-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_visa_overview = document.getElementById('rs-family-section-visa-overview');
  if (rs_family_section_visa_overview) {
    gsap.fromTo('#rs-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_form_who_is_this_visa_for = document.getElementById('rs-family-form-who-is-this-visa-for');
  if (rs_family_form_who_is_this_visa_for) {
    gsap.from('#rs-family-form-who-is-this-visa-for input, #rs-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_required_documents = document.getElementById('rs-family-list-required-documents');
  if (rs_family_list_required_documents) {
    gsap.from('#rs-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_application_process = document.getElementById('rs-family-list-application-process');
  if (rs_family_list_application_process) {
    gsap.from('#rs-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_timelines_deadlines = document.getElementById('rs-family-section-timelines-deadlines');
  if (rs_family_section_timelines_deadlines) {
    gsap.fromTo('#rs-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_fees_costs = document.getElementById('rs-family-section-fees-costs');
  if (rs_family_section_fees_costs) {
    gsap.fromTo('#rs-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_risks_common_mistakes = document.getElementById('rs-family-list-risks-common-mistakes');
  if (rs_family_list_risks_common_mistakes) {
    gsap.from('#rs-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_diy_vs_professional_assistance = document.getElementById('rs-family-section-diy-vs-professional-assistance');
  if (rs_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_rio_grande_do_sul_specific_context = document.getElementById('rs-family-section-rio-grande-do-sul-specific-context');
  if (rs_family_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-family-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_what_our_clients_say = document.getElementById('rs-family-section-what-our-clients-say');
  if (rs_family_section_what_our_clients_say) {
    gsap.fromTo('#rs-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_frequently_asked_questions = document.getElementById('rs-family-section-frequently-asked-questions');
  if (rs_family_section_frequently_asked_questions) {
    gsap.fromTo('#rs-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_international_support = document.getElementById('rs-family-section-international-support');
  if (rs_family_section_international_support) {
    gsap.fromTo('#rs-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_our_credentials = document.getElementById('rs-family-list-our-credentials');
  if (rs_family_list_our_credentials) {
    gsap.from('#rs-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_list_related_services = document.getElementById('rs-family-list-related-services');
  if (rs_family_list_related_services) {
    gsap.from('#rs-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_youre_in_good_hands = document.getElementById('rs-family-section-youre-in-good-hands');
  if (rs_family_section_youre_in_good_hands) {
    gsap.fromTo('#rs-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_family_section_21 = document.getElementById('rs-family-section-21');
  if (rs_family_section_21) {
    gsap.fromTo('#rs-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('rs-sports-form-compete-in-brazil-with-the-sports-visa');
  if (rs_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#rs-sports-form-compete-in-brazil-with-the-sports-visa input, #rs-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_quick_facts = document.getElementById('rs-sports-list-quick-facts');
  if (rs_sports_list_quick_facts) {
    gsap.from('#rs-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_common_challenges_applicants_face = document.getElementById('rs-sports-list-common-challenges-applicants-face');
  if (rs_sports_list_common_challenges_applicants_face) {
    gsap.from('#rs-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_how_we_solve_these_challenges = document.getElementById('rs-sports-list-how-we-solve-these-challenges');
  if (rs_sports_list_how_we_solve_these_challenges) {
    gsap.from('#rs-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_visa_overview = document.getElementById('rs-sports-section-visa-overview');
  if (rs_sports_section_visa_overview) {
    gsap.fromTo('#rs-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_form_who_is_this_visa_for = document.getElementById('rs-sports-form-who-is-this-visa-for');
  if (rs_sports_form_who_is_this_visa_for) {
    gsap.from('#rs-sports-form-who-is-this-visa-for input, #rs-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_required_documents = document.getElementById('rs-sports-list-required-documents');
  if (rs_sports_list_required_documents) {
    gsap.from('#rs-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_application_process = document.getElementById('rs-sports-list-application-process');
  if (rs_sports_list_application_process) {
    gsap.from('#rs-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_timelines_deadlines = document.getElementById('rs-sports-section-timelines-deadlines');
  if (rs_sports_section_timelines_deadlines) {
    gsap.fromTo('#rs-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_fees_costs = document.getElementById('rs-sports-section-fees-costs');
  if (rs_sports_section_fees_costs) {
    gsap.fromTo('#rs-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_risks_common_mistakes = document.getElementById('rs-sports-list-risks-common-mistakes');
  if (rs_sports_list_risks_common_mistakes) {
    gsap.from('#rs-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_diy_vs_professional_assistance = document.getElementById('rs-sports-section-diy-vs-professional-assistance');
  if (rs_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_rio_grande_do_sul_specific_context = document.getElementById('rs-sports-section-rio-grande-do-sul-specific-context');
  if (rs_sports_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-sports-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_what_our_clients_say = document.getElementById('rs-sports-section-what-our-clients-say');
  if (rs_sports_section_what_our_clients_say) {
    gsap.fromTo('#rs-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_frequently_asked_questions = document.getElementById('rs-sports-section-frequently-asked-questions');
  if (rs_sports_section_frequently_asked_questions) {
    gsap.fromTo('#rs-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_international_support = document.getElementById('rs-sports-section-international-support');
  if (rs_sports_section_international_support) {
    gsap.fromTo('#rs-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_our_credentials = document.getElementById('rs-sports-list-our-credentials');
  if (rs_sports_list_our_credentials) {
    gsap.from('#rs-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_list_related_services = document.getElementById('rs-sports-list-related-services');
  if (rs_sports_list_related_services) {
    gsap.from('#rs-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_youre_in_good_hands = document.getElementById('rs-sports-section-youre-in-good-hands');
  if (rs_sports_section_youre_in_good_hands) {
    gsap.fromTo('#rs-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_sports_section_21 = document.getElementById('rs-sports-section-21');
  if (rs_sports_section_21) {
    gsap.fromTo('#rs-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('rs-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (rs_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#rs-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #rs-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_quick_facts = document.getElementById('rs-medical-list-quick-facts');
  if (rs_medical_list_quick_facts) {
    gsap.from('#rs-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_common_challenges_applicants_face = document.getElementById('rs-medical-list-common-challenges-applicants-face');
  if (rs_medical_list_common_challenges_applicants_face) {
    gsap.from('#rs-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_how_we_solve_these_challenges = document.getElementById('rs-medical-list-how-we-solve-these-challenges');
  if (rs_medical_list_how_we_solve_these_challenges) {
    gsap.from('#rs-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_visa_overview = document.getElementById('rs-medical-section-visa-overview');
  if (rs_medical_section_visa_overview) {
    gsap.fromTo('#rs-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_form_who_is_this_visa_for = document.getElementById('rs-medical-form-who-is-this-visa-for');
  if (rs_medical_form_who_is_this_visa_for) {
    gsap.from('#rs-medical-form-who-is-this-visa-for input, #rs-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_required_documents = document.getElementById('rs-medical-list-required-documents');
  if (rs_medical_list_required_documents) {
    gsap.from('#rs-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_application_process = document.getElementById('rs-medical-list-application-process');
  if (rs_medical_list_application_process) {
    gsap.from('#rs-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_timelines_deadlines = document.getElementById('rs-medical-section-timelines-deadlines');
  if (rs_medical_section_timelines_deadlines) {
    gsap.fromTo('#rs-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_fees_costs = document.getElementById('rs-medical-section-fees-costs');
  if (rs_medical_section_fees_costs) {
    gsap.fromTo('#rs-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_risks_common_mistakes = document.getElementById('rs-medical-list-risks-common-mistakes');
  if (rs_medical_list_risks_common_mistakes) {
    gsap.from('#rs-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_diy_vs_professional_assistance = document.getElementById('rs-medical-section-diy-vs-professional-assistance');
  if (rs_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_rio_grande_do_sul_specific_context = document.getElementById('rs-medical-section-rio-grande-do-sul-specific-context');
  if (rs_medical_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-medical-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_what_our_clients_say = document.getElementById('rs-medical-section-what-our-clients-say');
  if (rs_medical_section_what_our_clients_say) {
    gsap.fromTo('#rs-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_frequently_asked_questions = document.getElementById('rs-medical-section-frequently-asked-questions');
  if (rs_medical_section_frequently_asked_questions) {
    gsap.fromTo('#rs-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_international_support = document.getElementById('rs-medical-section-international-support');
  if (rs_medical_section_international_support) {
    gsap.fromTo('#rs-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_our_credentials = document.getElementById('rs-medical-list-our-credentials');
  if (rs_medical_list_our_credentials) {
    gsap.from('#rs-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_list_related_services = document.getElementById('rs-medical-list-related-services');
  if (rs_medical_list_related_services) {
    gsap.from('#rs-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_youre_in_good_hands = document.getElementById('rs-medical-section-youre-in-good-hands');
  if (rs_medical_section_youre_in_good_hands) {
    gsap.fromTo('#rs-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_medical_section_21 = document.getElementById('rs-medical-section-21');
  if (rs_medical_section_21) {
    gsap.fromTo('#rs-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('rs-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (rs_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#rs-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #rs-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_quick_facts = document.getElementById('rs-tourist-list-quick-facts');
  if (rs_tourist_list_quick_facts) {
    gsap.from('#rs-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_common_challenges_applicants_face = document.getElementById('rs-tourist-list-common-challenges-applicants-face');
  if (rs_tourist_list_common_challenges_applicants_face) {
    gsap.from('#rs-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_how_we_solve_these_challenges = document.getElementById('rs-tourist-list-how-we-solve-these-challenges');
  if (rs_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#rs-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_visa_overview = document.getElementById('rs-tourist-section-visa-overview');
  if (rs_tourist_section_visa_overview) {
    gsap.fromTo('#rs-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_form_who_is_this_visa_for = document.getElementById('rs-tourist-form-who-is-this-visa-for');
  if (rs_tourist_form_who_is_this_visa_for) {
    gsap.from('#rs-tourist-form-who-is-this-visa-for input, #rs-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_required_documents = document.getElementById('rs-tourist-list-required-documents');
  if (rs_tourist_list_required_documents) {
    gsap.from('#rs-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_application_process = document.getElementById('rs-tourist-list-application-process');
  if (rs_tourist_list_application_process) {
    gsap.from('#rs-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_timelines_deadlines = document.getElementById('rs-tourist-section-timelines-deadlines');
  if (rs_tourist_section_timelines_deadlines) {
    gsap.fromTo('#rs-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_fees_costs = document.getElementById('rs-tourist-section-fees-costs');
  if (rs_tourist_section_fees_costs) {
    gsap.fromTo('#rs-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_risks_common_mistakes = document.getElementById('rs-tourist-list-risks-common-mistakes');
  if (rs_tourist_list_risks_common_mistakes) {
    gsap.from('#rs-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_diy_vs_professional_assistance = document.getElementById('rs-tourist-section-diy-vs-professional-assistance');
  if (rs_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_rio_grande_do_sul_specific_context = document.getElementById('rs-tourist-section-rio-grande-do-sul-specific-context');
  if (rs_tourist_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-tourist-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_what_our_clients_say = document.getElementById('rs-tourist-section-what-our-clients-say');
  if (rs_tourist_section_what_our_clients_say) {
    gsap.fromTo('#rs-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_frequently_asked_questions = document.getElementById('rs-tourist-section-frequently-asked-questions');
  if (rs_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#rs-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_international_support = document.getElementById('rs-tourist-section-international-support');
  if (rs_tourist_section_international_support) {
    gsap.fromTo('#rs-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_our_credentials = document.getElementById('rs-tourist-list-our-credentials');
  if (rs_tourist_list_our_credentials) {
    gsap.from('#rs-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_list_related_services = document.getElementById('rs-tourist-list-related-services');
  if (rs_tourist_list_related_services) {
    gsap.from('#rs-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_youre_in_good_hands = document.getElementById('rs-tourist-section-youre-in-good-hands');
  if (rs_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#rs-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_tourist_section_21 = document.getElementById('rs-tourist-section-21');
  if (rs_tourist_section_21) {
    gsap.fromTo('#rs-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('rs-transit-form-transit-through-brazil-with-the-transit-visa');
  if (rs_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#rs-transit-form-transit-through-brazil-with-the-transit-visa input, #rs-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_quick_facts = document.getElementById('rs-transit-list-quick-facts');
  if (rs_transit_list_quick_facts) {
    gsap.from('#rs-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_common_challenges_applicants_face = document.getElementById('rs-transit-list-common-challenges-applicants-face');
  if (rs_transit_list_common_challenges_applicants_face) {
    gsap.from('#rs-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_how_we_solve_these_challenges = document.getElementById('rs-transit-list-how-we-solve-these-challenges');
  if (rs_transit_list_how_we_solve_these_challenges) {
    gsap.from('#rs-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_visa_overview = document.getElementById('rs-transit-section-visa-overview');
  if (rs_transit_section_visa_overview) {
    gsap.fromTo('#rs-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_form_who_is_this_visa_for = document.getElementById('rs-transit-form-who-is-this-visa-for');
  if (rs_transit_form_who_is_this_visa_for) {
    gsap.from('#rs-transit-form-who-is-this-visa-for input, #rs-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_required_documents = document.getElementById('rs-transit-list-required-documents');
  if (rs_transit_list_required_documents) {
    gsap.from('#rs-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_application_process = document.getElementById('rs-transit-list-application-process');
  if (rs_transit_list_application_process) {
    gsap.from('#rs-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_timelines_deadlines = document.getElementById('rs-transit-section-timelines-deadlines');
  if (rs_transit_section_timelines_deadlines) {
    gsap.fromTo('#rs-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_fees_costs = document.getElementById('rs-transit-section-fees-costs');
  if (rs_transit_section_fees_costs) {
    gsap.fromTo('#rs-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_risks_common_mistakes = document.getElementById('rs-transit-list-risks-common-mistakes');
  if (rs_transit_list_risks_common_mistakes) {
    gsap.from('#rs-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_diy_vs_professional_assistance = document.getElementById('rs-transit-section-diy-vs-professional-assistance');
  if (rs_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_rio_grande_do_sul_specific_context = document.getElementById('rs-transit-section-rio-grande-do-sul-specific-context');
  if (rs_transit_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-transit-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_what_our_clients_say = document.getElementById('rs-transit-section-what-our-clients-say');
  if (rs_transit_section_what_our_clients_say) {
    gsap.fromTo('#rs-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_frequently_asked_questions = document.getElementById('rs-transit-section-frequently-asked-questions');
  if (rs_transit_section_frequently_asked_questions) {
    gsap.fromTo('#rs-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_international_support = document.getElementById('rs-transit-section-international-support');
  if (rs_transit_section_international_support) {
    gsap.fromTo('#rs-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_our_credentials = document.getElementById('rs-transit-list-our-credentials');
  if (rs_transit_list_our_credentials) {
    gsap.from('#rs-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_list_related_services = document.getElementById('rs-transit-list-related-services');
  if (rs_transit_list_related_services) {
    gsap.from('#rs-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_youre_in_good_hands = document.getElementById('rs-transit-section-youre-in-good-hands');
  if (rs_transit_section_youre_in_good_hands) {
    gsap.fromTo('#rs-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_transit_section_21 = document.getElementById('rs-transit-section-21');
  if (rs_transit_section_21) {
    gsap.fromTo('#rs-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_form_study_in_brazil_with_the_student_visa = document.getElementById('rs-student-form-study-in-brazil-with-the-student-visa');
  if (rs_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#rs-student-form-study-in-brazil-with-the-student-visa input, #rs-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_quick_facts = document.getElementById('rs-student-list-quick-facts');
  if (rs_student_list_quick_facts) {
    gsap.from('#rs-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_common_challenges_applicants_face = document.getElementById('rs-student-list-common-challenges-applicants-face');
  if (rs_student_list_common_challenges_applicants_face) {
    gsap.from('#rs-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_how_we_solve_these_challenges = document.getElementById('rs-student-list-how-we-solve-these-challenges');
  if (rs_student_list_how_we_solve_these_challenges) {
    gsap.from('#rs-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_visa_overview = document.getElementById('rs-student-section-visa-overview');
  if (rs_student_section_visa_overview) {
    gsap.fromTo('#rs-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_form_who_is_this_visa_for = document.getElementById('rs-student-form-who-is-this-visa-for');
  if (rs_student_form_who_is_this_visa_for) {
    gsap.from('#rs-student-form-who-is-this-visa-for input, #rs-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_required_documents = document.getElementById('rs-student-list-required-documents');
  if (rs_student_list_required_documents) {
    gsap.from('#rs-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_application_process = document.getElementById('rs-student-list-application-process');
  if (rs_student_list_application_process) {
    gsap.from('#rs-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_timelines_deadlines = document.getElementById('rs-student-section-timelines-deadlines');
  if (rs_student_section_timelines_deadlines) {
    gsap.fromTo('#rs-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_fees_costs = document.getElementById('rs-student-section-fees-costs');
  if (rs_student_section_fees_costs) {
    gsap.fromTo('#rs-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_risks_common_mistakes = document.getElementById('rs-student-list-risks-common-mistakes');
  if (rs_student_list_risks_common_mistakes) {
    gsap.from('#rs-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_diy_vs_professional_assistance = document.getElementById('rs-student-section-diy-vs-professional-assistance');
  if (rs_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_rio_grande_do_sul_specific_context = document.getElementById('rs-student-section-rio-grande-do-sul-specific-context');
  if (rs_student_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-student-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_what_our_clients_say = document.getElementById('rs-student-section-what-our-clients-say');
  if (rs_student_section_what_our_clients_say) {
    gsap.fromTo('#rs-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_frequently_asked_questions = document.getElementById('rs-student-section-frequently-asked-questions');
  if (rs_student_section_frequently_asked_questions) {
    gsap.fromTo('#rs-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_international_support = document.getElementById('rs-student-section-international-support');
  if (rs_student_section_international_support) {
    gsap.fromTo('#rs-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_our_credentials = document.getElementById('rs-student-list-our-credentials');
  if (rs_student_list_our_credentials) {
    gsap.from('#rs-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_list_related_services = document.getElementById('rs-student-list-related-services');
  if (rs_student_list_related_services) {
    gsap.from('#rs-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_youre_in_good_hands = document.getElementById('rs-student-section-youre-in-good-hands');
  if (rs_student_section_youre_in_good_hands) {
    gsap.fromTo('#rs-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_student_section_21 = document.getElementById('rs-student-section-21');
  if (rs_student_section_21) {
    gsap.fromTo('#rs-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('rs-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (rs_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#rs-business-form-conduct-business-in-brazil-with-the-business-visa input, #rs-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_quick_facts = document.getElementById('rs-business-list-quick-facts');
  if (rs_business_list_quick_facts) {
    gsap.from('#rs-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_common_challenges_applicants_face = document.getElementById('rs-business-list-common-challenges-applicants-face');
  if (rs_business_list_common_challenges_applicants_face) {
    gsap.from('#rs-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_how_we_solve_these_challenges = document.getElementById('rs-business-list-how-we-solve-these-challenges');
  if (rs_business_list_how_we_solve_these_challenges) {
    gsap.from('#rs-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_visa_overview = document.getElementById('rs-business-section-visa-overview');
  if (rs_business_section_visa_overview) {
    gsap.fromTo('#rs-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_form_who_is_this_visa_for = document.getElementById('rs-business-form-who-is-this-visa-for');
  if (rs_business_form_who_is_this_visa_for) {
    gsap.from('#rs-business-form-who-is-this-visa-for input, #rs-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_required_documents = document.getElementById('rs-business-list-required-documents');
  if (rs_business_list_required_documents) {
    gsap.from('#rs-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_application_process = document.getElementById('rs-business-list-application-process');
  if (rs_business_list_application_process) {
    gsap.from('#rs-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_timelines_deadlines = document.getElementById('rs-business-section-timelines-deadlines');
  if (rs_business_section_timelines_deadlines) {
    gsap.fromTo('#rs-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_fees_costs = document.getElementById('rs-business-section-fees-costs');
  if (rs_business_section_fees_costs) {
    gsap.fromTo('#rs-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_risks_common_mistakes = document.getElementById('rs-business-list-risks-common-mistakes');
  if (rs_business_list_risks_common_mistakes) {
    gsap.from('#rs-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_diy_vs_professional_assistance = document.getElementById('rs-business-section-diy-vs-professional-assistance');
  if (rs_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_rio_grande_do_sul_specific_context = document.getElementById('rs-business-section-rio-grande-do-sul-specific-context');
  if (rs_business_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-business-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_what_our_clients_say = document.getElementById('rs-business-section-what-our-clients-say');
  if (rs_business_section_what_our_clients_say) {
    gsap.fromTo('#rs-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_frequently_asked_questions = document.getElementById('rs-business-section-frequently-asked-questions');
  if (rs_business_section_frequently_asked_questions) {
    gsap.fromTo('#rs-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_international_support = document.getElementById('rs-business-section-international-support');
  if (rs_business_section_international_support) {
    gsap.fromTo('#rs-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_our_credentials = document.getElementById('rs-business-list-our-credentials');
  if (rs_business_list_our_credentials) {
    gsap.from('#rs-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_list_related_services = document.getElementById('rs-business-list-related-services');
  if (rs_business_list_related_services) {
    gsap.from('#rs-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_youre_in_good_hands = document.getElementById('rs-business-section-youre-in-good-hands');
  if (rs_business_section_youre_in_good_hands) {
    gsap.fromTo('#rs-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_business_section_21 = document.getElementById('rs-business-section-21');
  if (rs_business_section_21) {
    gsap.fromTo('#rs-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('rs-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (rs_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#rs-research-form-conduct-research-in-brazil-with-the-research-visa input, #rs-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_quick_facts = document.getElementById('rs-research-list-quick-facts');
  if (rs_research_list_quick_facts) {
    gsap.from('#rs-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_common_challenges_applicants_face = document.getElementById('rs-research-list-common-challenges-applicants-face');
  if (rs_research_list_common_challenges_applicants_face) {
    gsap.from('#rs-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_how_we_solve_these_challenges = document.getElementById('rs-research-list-how-we-solve-these-challenges');
  if (rs_research_list_how_we_solve_these_challenges) {
    gsap.from('#rs-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_visa_overview = document.getElementById('rs-research-section-visa-overview');
  if (rs_research_section_visa_overview) {
    gsap.fromTo('#rs-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_form_who_is_this_visa_for = document.getElementById('rs-research-form-who-is-this-visa-for');
  if (rs_research_form_who_is_this_visa_for) {
    gsap.from('#rs-research-form-who-is-this-visa-for input, #rs-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_required_documents = document.getElementById('rs-research-list-required-documents');
  if (rs_research_list_required_documents) {
    gsap.from('#rs-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_application_process = document.getElementById('rs-research-list-application-process');
  if (rs_research_list_application_process) {
    gsap.from('#rs-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_timelines_deadlines = document.getElementById('rs-research-section-timelines-deadlines');
  if (rs_research_section_timelines_deadlines) {
    gsap.fromTo('#rs-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_fees_costs = document.getElementById('rs-research-section-fees-costs');
  if (rs_research_section_fees_costs) {
    gsap.fromTo('#rs-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_risks_common_mistakes = document.getElementById('rs-research-list-risks-common-mistakes');
  if (rs_research_list_risks_common_mistakes) {
    gsap.from('#rs-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_diy_vs_professional_assistance = document.getElementById('rs-research-section-diy-vs-professional-assistance');
  if (rs_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_rio_grande_do_sul_specific_context = document.getElementById('rs-research-section-rio-grande-do-sul-specific-context');
  if (rs_research_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-research-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_what_our_clients_say = document.getElementById('rs-research-section-what-our-clients-say');
  if (rs_research_section_what_our_clients_say) {
    gsap.fromTo('#rs-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_frequently_asked_questions = document.getElementById('rs-research-section-frequently-asked-questions');
  if (rs_research_section_frequently_asked_questions) {
    gsap.fromTo('#rs-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_international_support = document.getElementById('rs-research-section-international-support');
  if (rs_research_section_international_support) {
    gsap.fromTo('#rs-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_our_credentials = document.getElementById('rs-research-list-our-credentials');
  if (rs_research_list_our_credentials) {
    gsap.from('#rs-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_list_related_services = document.getElementById('rs-research-list-related-services');
  if (rs_research_list_related_services) {
    gsap.from('#rs-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_youre_in_good_hands = document.getElementById('rs-research-section-youre-in-good-hands');
  if (rs_research_section_youre_in_good_hands) {
    gsap.fromTo('#rs-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_research_section_21 = document.getElementById('rs-research-section-21');
  if (rs_research_section_21) {
    gsap.fromTo('#rs-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('rs-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (rs_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#rs-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #rs-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_quick_facts = document.getElementById('rs-diplomatic-list-quick-facts');
  if (rs_diplomatic_list_quick_facts) {
    gsap.from('#rs-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_common_challenges_applicants_face = document.getElementById('rs-diplomatic-list-common-challenges-applicants-face');
  if (rs_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#rs-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_how_we_solve_these_challenges = document.getElementById('rs-diplomatic-list-how-we-solve-these-challenges');
  if (rs_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#rs-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_visa_overview = document.getElementById('rs-diplomatic-section-visa-overview');
  if (rs_diplomatic_section_visa_overview) {
    gsap.fromTo('#rs-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_form_who_is_this_visa_for = document.getElementById('rs-diplomatic-form-who-is-this-visa-for');
  if (rs_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#rs-diplomatic-form-who-is-this-visa-for input, #rs-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_required_documents = document.getElementById('rs-diplomatic-list-required-documents');
  if (rs_diplomatic_list_required_documents) {
    gsap.from('#rs-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_application_process = document.getElementById('rs-diplomatic-list-application-process');
  if (rs_diplomatic_list_application_process) {
    gsap.from('#rs-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_timelines_deadlines = document.getElementById('rs-diplomatic-section-timelines-deadlines');
  if (rs_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#rs-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_fees_costs = document.getElementById('rs-diplomatic-section-fees-costs');
  if (rs_diplomatic_section_fees_costs) {
    gsap.fromTo('#rs-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_risks_common_mistakes = document.getElementById('rs-diplomatic-list-risks-common-mistakes');
  if (rs_diplomatic_list_risks_common_mistakes) {
    gsap.from('#rs-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_diy_vs_professional_assistance = document.getElementById('rs-diplomatic-section-diy-vs-professional-assistance');
  if (rs_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_rio_grande_do_sul_specific_context = document.getElementById('rs-diplomatic-section-rio-grande-do-sul-specific-context');
  if (rs_diplomatic_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-diplomatic-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_what_our_clients_say = document.getElementById('rs-diplomatic-section-what-our-clients-say');
  if (rs_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#rs-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_frequently_asked_questions = document.getElementById('rs-diplomatic-section-frequently-asked-questions');
  if (rs_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#rs-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_international_support = document.getElementById('rs-diplomatic-section-international-support');
  if (rs_diplomatic_section_international_support) {
    gsap.fromTo('#rs-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_our_credentials = document.getElementById('rs-diplomatic-list-our-credentials');
  if (rs_diplomatic_list_our_credentials) {
    gsap.from('#rs-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_list_related_services = document.getElementById('rs-diplomatic-list-related-services');
  if (rs_diplomatic_list_related_services) {
    gsap.from('#rs-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_youre_in_good_hands = document.getElementById('rs-diplomatic-section-youre-in-good-hands');
  if (rs_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#rs-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_diplomatic_section_21 = document.getElementById('rs-diplomatic-section-21');
  if (rs_diplomatic_section_21) {
    gsap.fromTo('#rs-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('rs-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (rs_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#rs-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #rs-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_quick_facts = document.getElementById('rs-journalist-list-quick-facts');
  if (rs_journalist_list_quick_facts) {
    gsap.from('#rs-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_common_challenges_applicants_face = document.getElementById('rs-journalist-list-common-challenges-applicants-face');
  if (rs_journalist_list_common_challenges_applicants_face) {
    gsap.from('#rs-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_how_we_solve_these_challenges = document.getElementById('rs-journalist-list-how-we-solve-these-challenges');
  if (rs_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#rs-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_visa_overview = document.getElementById('rs-journalist-section-visa-overview');
  if (rs_journalist_section_visa_overview) {
    gsap.fromTo('#rs-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_form_who_is_this_visa_for = document.getElementById('rs-journalist-form-who-is-this-visa-for');
  if (rs_journalist_form_who_is_this_visa_for) {
    gsap.from('#rs-journalist-form-who-is-this-visa-for input, #rs-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_required_documents = document.getElementById('rs-journalist-list-required-documents');
  if (rs_journalist_list_required_documents) {
    gsap.from('#rs-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_application_process = document.getElementById('rs-journalist-list-application-process');
  if (rs_journalist_list_application_process) {
    gsap.from('#rs-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_timelines_deadlines = document.getElementById('rs-journalist-section-timelines-deadlines');
  if (rs_journalist_section_timelines_deadlines) {
    gsap.fromTo('#rs-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_fees_costs = document.getElementById('rs-journalist-section-fees-costs');
  if (rs_journalist_section_fees_costs) {
    gsap.fromTo('#rs-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_risks_common_mistakes = document.getElementById('rs-journalist-list-risks-common-mistakes');
  if (rs_journalist_list_risks_common_mistakes) {
    gsap.from('#rs-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_diy_vs_professional_assistance = document.getElementById('rs-journalist-section-diy-vs-professional-assistance');
  if (rs_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_rio_grande_do_sul_specific_context = document.getElementById('rs-journalist-section-rio-grande-do-sul-specific-context');
  if (rs_journalist_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-journalist-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_what_our_clients_say = document.getElementById('rs-journalist-section-what-our-clients-say');
  if (rs_journalist_section_what_our_clients_say) {
    gsap.fromTo('#rs-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_frequently_asked_questions = document.getElementById('rs-journalist-section-frequently-asked-questions');
  if (rs_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#rs-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_international_support = document.getElementById('rs-journalist-section-international-support');
  if (rs_journalist_section_international_support) {
    gsap.fromTo('#rs-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_our_credentials = document.getElementById('rs-journalist-list-our-credentials');
  if (rs_journalist_list_our_credentials) {
    gsap.from('#rs-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_list_related_services = document.getElementById('rs-journalist-list-related-services');
  if (rs_journalist_list_related_services) {
    gsap.from('#rs-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_youre_in_good_hands = document.getElementById('rs-journalist-section-youre-in-good-hands');
  if (rs_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#rs-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_journalist_section_21 = document.getElementById('rs-journalist-section-21');
  if (rs_journalist_section_21) {
    gsap.fromTo('#rs-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('rs-fines-form-resolve-immigration-fines-in-brazil');
  if (rs_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#rs-fines-form-resolve-immigration-fines-in-brazil input, #rs-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_quick_facts = document.getElementById('rs-fines-list-quick-facts');
  if (rs_fines_list_quick_facts) {
    gsap.from('#rs-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_common_challenges_applicants_face = document.getElementById('rs-fines-list-common-challenges-applicants-face');
  if (rs_fines_list_common_challenges_applicants_face) {
    gsap.from('#rs-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_how_we_solve_these_challenges = document.getElementById('rs-fines-list-how-we-solve-these-challenges');
  if (rs_fines_list_how_we_solve_these_challenges) {
    gsap.from('#rs-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_service_overview = document.getElementById('rs-fines-section-service-overview');
  if (rs_fines_section_service_overview) {
    gsap.fromTo('#rs-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_form_who_is_this_service_for = document.getElementById('rs-fines-form-who-is-this-service-for');
  if (rs_fines_form_who_is_this_service_for) {
    gsap.from('#rs-fines-form-who-is-this-service-for input, #rs-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_required_documents = document.getElementById('rs-fines-list-required-documents');
  if (rs_fines_list_required_documents) {
    gsap.from('#rs-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_process = document.getElementById('rs-fines-list-process');
  if (rs_fines_list_process) {
    gsap.from('#rs-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_timelines_deadlines = document.getElementById('rs-fines-section-timelines-deadlines');
  if (rs_fines_section_timelines_deadlines) {
    gsap.fromTo('#rs-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_fees_costs = document.getElementById('rs-fines-section-fees-costs');
  if (rs_fines_section_fees_costs) {
    gsap.fromTo('#rs-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_risks_common_mistakes = document.getElementById('rs-fines-list-risks-common-mistakes');
  if (rs_fines_list_risks_common_mistakes) {
    gsap.from('#rs-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_diy_vs_professional_assistance = document.getElementById('rs-fines-section-diy-vs-professional-assistance');
  if (rs_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_rio_grande_do_sul_specific_context = document.getElementById('rs-fines-section-rio-grande-do-sul-specific-context');
  if (rs_fines_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-fines-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_what_our_clients_say = document.getElementById('rs-fines-section-what-our-clients-say');
  if (rs_fines_section_what_our_clients_say) {
    gsap.fromTo('#rs-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_frequently_asked_questions = document.getElementById('rs-fines-section-frequently-asked-questions');
  if (rs_fines_section_frequently_asked_questions) {
    gsap.fromTo('#rs-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_international_support = document.getElementById('rs-fines-section-international-support');
  if (rs_fines_section_international_support) {
    gsap.fromTo('#rs-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_our_credentials = document.getElementById('rs-fines-list-our-credentials');
  if (rs_fines_list_our_credentials) {
    gsap.from('#rs-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_list_related_services = document.getElementById('rs-fines-list-related-services');
  if (rs_fines_list_related_services) {
    gsap.from('#rs-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_youre_in_good_hands = document.getElementById('rs-fines-section-youre-in-good-hands');
  if (rs_fines_section_youre_in_good_hands) {
    gsap.fromTo('#rs-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_fines_section_21 = document.getElementById('rs-fines-section-21');
  if (rs_fines_section_21) {
    gsap.fromTo('#rs-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_form_deportation_assistance_in_brazil = document.getElementById('rs-deportation-form-deportation-assistance-in-brazil');
  if (rs_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#rs-deportation-form-deportation-assistance-in-brazil input, #rs-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_quick_facts = document.getElementById('rs-deportation-list-quick-facts');
  if (rs_deportation_list_quick_facts) {
    gsap.from('#rs-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_common_challenges_applicants_face = document.getElementById('rs-deportation-list-common-challenges-applicants-face');
  if (rs_deportation_list_common_challenges_applicants_face) {
    gsap.from('#rs-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_how_we_solve_these_challenges = document.getElementById('rs-deportation-list-how-we-solve-these-challenges');
  if (rs_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#rs-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_service_overview = document.getElementById('rs-deportation-section-service-overview');
  if (rs_deportation_section_service_overview) {
    gsap.fromTo('#rs-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_form_who_is_this_service_for = document.getElementById('rs-deportation-form-who-is-this-service-for');
  if (rs_deportation_form_who_is_this_service_for) {
    gsap.from('#rs-deportation-form-who-is-this-service-for input, #rs-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_required_documents = document.getElementById('rs-deportation-list-required-documents');
  if (rs_deportation_list_required_documents) {
    gsap.from('#rs-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_process = document.getElementById('rs-deportation-list-process');
  if (rs_deportation_list_process) {
    gsap.from('#rs-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_timelines_deadlines = document.getElementById('rs-deportation-section-timelines-deadlines');
  if (rs_deportation_section_timelines_deadlines) {
    gsap.fromTo('#rs-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_fees_costs = document.getElementById('rs-deportation-section-fees-costs');
  if (rs_deportation_section_fees_costs) {
    gsap.fromTo('#rs-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_risks_common_mistakes = document.getElementById('rs-deportation-list-risks-common-mistakes');
  if (rs_deportation_list_risks_common_mistakes) {
    gsap.from('#rs-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_diy_vs_professional_assistance = document.getElementById('rs-deportation-section-diy-vs-professional-assistance');
  if (rs_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_rio_grande_do_sul_specific_context = document.getElementById('rs-deportation-section-rio-grande-do-sul-specific-context');
  if (rs_deportation_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-deportation-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_what_our_clients_say = document.getElementById('rs-deportation-section-what-our-clients-say');
  if (rs_deportation_section_what_our_clients_say) {
    gsap.fromTo('#rs-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_frequently_asked_questions = document.getElementById('rs-deportation-section-frequently-asked-questions');
  if (rs_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#rs-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_international_support = document.getElementById('rs-deportation-section-international-support');
  if (rs_deportation_section_international_support) {
    gsap.fromTo('#rs-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_our_credentials = document.getElementById('rs-deportation-list-our-credentials');
  if (rs_deportation_list_our_credentials) {
    gsap.from('#rs-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_list_related_services = document.getElementById('rs-deportation-list-related-services');
  if (rs_deportation_list_related_services) {
    gsap.from('#rs-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_youre_in_good_hands = document.getElementById('rs-deportation-section-youre-in-good-hands');
  if (rs_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#rs-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_deportation_section_21 = document.getElementById('rs-deportation-section-21');
  if (rs_deportation_section_21) {
    gsap.fromTo('#rs-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('rs-translation-form-sworn-document-translation-services-in-brazil');
  if (rs_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#rs-translation-form-sworn-document-translation-services-in-brazil input, #rs-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_quick_facts = document.getElementById('rs-translation-list-quick-facts');
  if (rs_translation_list_quick_facts) {
    gsap.from('#rs-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_common_challenges_applicants_face = document.getElementById('rs-translation-list-common-challenges-applicants-face');
  if (rs_translation_list_common_challenges_applicants_face) {
    gsap.from('#rs-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_how_we_solve_these_challenges = document.getElementById('rs-translation-list-how-we-solve-these-challenges');
  if (rs_translation_list_how_we_solve_these_challenges) {
    gsap.from('#rs-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_service_overview = document.getElementById('rs-translation-section-service-overview');
  if (rs_translation_section_service_overview) {
    gsap.fromTo('#rs-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_form_who_is_this_service_for = document.getElementById('rs-translation-form-who-is-this-service-for');
  if (rs_translation_form_who_is_this_service_for) {
    gsap.from('#rs-translation-form-who-is-this-service-for input, #rs-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_required_documents = document.getElementById('rs-translation-list-required-documents');
  if (rs_translation_list_required_documents) {
    gsap.from('#rs-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_process = document.getElementById('rs-translation-list-process');
  if (rs_translation_list_process) {
    gsap.from('#rs-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_timelines_deadlines = document.getElementById('rs-translation-section-timelines-deadlines');
  if (rs_translation_section_timelines_deadlines) {
    gsap.fromTo('#rs-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_fees_costs = document.getElementById('rs-translation-section-fees-costs');
  if (rs_translation_section_fees_costs) {
    gsap.fromTo('#rs-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_risks_common_mistakes = document.getElementById('rs-translation-list-risks-common-mistakes');
  if (rs_translation_list_risks_common_mistakes) {
    gsap.from('#rs-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_diy_vs_professional_assistance = document.getElementById('rs-translation-section-diy-vs-professional-assistance');
  if (rs_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_rio_grande_do_sul_specific_context = document.getElementById('rs-translation-section-rio-grande-do-sul-specific-context');
  if (rs_translation_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-translation-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_what_our_clients_say = document.getElementById('rs-translation-section-what-our-clients-say');
  if (rs_translation_section_what_our_clients_say) {
    gsap.fromTo('#rs-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_frequently_asked_questions = document.getElementById('rs-translation-section-frequently-asked-questions');
  if (rs_translation_section_frequently_asked_questions) {
    gsap.fromTo('#rs-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_international_support = document.getElementById('rs-translation-section-international-support');
  if (rs_translation_section_international_support) {
    gsap.fromTo('#rs-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_our_credentials = document.getElementById('rs-translation-list-our-credentials');
  if (rs_translation_list_our_credentials) {
    gsap.from('#rs-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_list_related_services = document.getElementById('rs-translation-list-related-services');
  if (rs_translation_list_related_services) {
    gsap.from('#rs-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_youre_in_good_hands = document.getElementById('rs-translation-section-youre-in-good-hands');
  if (rs_translation_section_youre_in_good_hands) {
    gsap.fromTo('#rs-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_translation_section_21 = document.getElementById('rs-translation-section-21');
  if (rs_translation_section_21) {
    gsap.fromTo('#rs-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('rs-expulsion-form-expulsion-assistance-in-brazil');
  if (rs_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#rs-expulsion-form-expulsion-assistance-in-brazil input, #rs-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_quick_facts = document.getElementById('rs-expulsion-list-quick-facts');
  if (rs_expulsion_list_quick_facts) {
    gsap.from('#rs-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_common_challenges_applicants_face = document.getElementById('rs-expulsion-list-common-challenges-applicants-face');
  if (rs_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#rs-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_how_we_solve_these_challenges = document.getElementById('rs-expulsion-list-how-we-solve-these-challenges');
  if (rs_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#rs-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_service_overview = document.getElementById('rs-expulsion-section-service-overview');
  if (rs_expulsion_section_service_overview) {
    gsap.fromTo('#rs-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_form_who_is_this_service_for = document.getElementById('rs-expulsion-form-who-is-this-service-for');
  if (rs_expulsion_form_who_is_this_service_for) {
    gsap.from('#rs-expulsion-form-who-is-this-service-for input, #rs-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_required_documents = document.getElementById('rs-expulsion-list-required-documents');
  if (rs_expulsion_list_required_documents) {
    gsap.from('#rs-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_process = document.getElementById('rs-expulsion-list-process');
  if (rs_expulsion_list_process) {
    gsap.from('#rs-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_timelines_deadlines = document.getElementById('rs-expulsion-section-timelines-deadlines');
  if (rs_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#rs-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_fees_costs = document.getElementById('rs-expulsion-section-fees-costs');
  if (rs_expulsion_section_fees_costs) {
    gsap.fromTo('#rs-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_risks_common_mistakes = document.getElementById('rs-expulsion-list-risks-common-mistakes');
  if (rs_expulsion_list_risks_common_mistakes) {
    gsap.from('#rs-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_diy_vs_professional_assistance = document.getElementById('rs-expulsion-section-diy-vs-professional-assistance');
  if (rs_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_rio_grande_do_sul_specific_context = document.getElementById('rs-expulsion-section-rio-grande-do-sul-specific-context');
  if (rs_expulsion_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-expulsion-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_what_our_clients_say = document.getElementById('rs-expulsion-section-what-our-clients-say');
  if (rs_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#rs-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_frequently_asked_questions = document.getElementById('rs-expulsion-section-frequently-asked-questions');
  if (rs_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#rs-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_international_support = document.getElementById('rs-expulsion-section-international-support');
  if (rs_expulsion_section_international_support) {
    gsap.fromTo('#rs-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_our_credentials = document.getElementById('rs-expulsion-list-our-credentials');
  if (rs_expulsion_list_our_credentials) {
    gsap.from('#rs-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_list_related_services = document.getElementById('rs-expulsion-list-related-services');
  if (rs_expulsion_list_related_services) {
    gsap.from('#rs-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_youre_in_good_hands = document.getElementById('rs-expulsion-section-youre-in-good-hands');
  if (rs_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#rs-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_expulsion_section_21 = document.getElementById('rs-expulsion-section-21');
  if (rs_expulsion_section_21) {
    gsap.fromTo('#rs-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('rs-appeals-form-appeal-immigration-denials-in-brazil');
  if (rs_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#rs-appeals-form-appeal-immigration-denials-in-brazil input, #rs-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_quick_facts = document.getElementById('rs-appeals-list-quick-facts');
  if (rs_appeals_list_quick_facts) {
    gsap.from('#rs-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_common_challenges_applicants_face = document.getElementById('rs-appeals-list-common-challenges-applicants-face');
  if (rs_appeals_list_common_challenges_applicants_face) {
    gsap.from('#rs-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_how_we_solve_these_challenges = document.getElementById('rs-appeals-list-how-we-solve-these-challenges');
  if (rs_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#rs-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_service_overview = document.getElementById('rs-appeals-section-service-overview');
  if (rs_appeals_section_service_overview) {
    gsap.fromTo('#rs-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_form_who_is_this_service_for = document.getElementById('rs-appeals-form-who-is-this-service-for');
  if (rs_appeals_form_who_is_this_service_for) {
    gsap.from('#rs-appeals-form-who-is-this-service-for input, #rs-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_required_documents = document.getElementById('rs-appeals-list-required-documents');
  if (rs_appeals_list_required_documents) {
    gsap.from('#rs-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_appeal_process = document.getElementById('rs-appeals-list-appeal-process');
  if (rs_appeals_list_appeal_process) {
    gsap.from('#rs-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_timelines_deadlines = document.getElementById('rs-appeals-section-timelines-deadlines');
  if (rs_appeals_section_timelines_deadlines) {
    gsap.fromTo('#rs-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_fees_costs = document.getElementById('rs-appeals-section-fees-costs');
  if (rs_appeals_section_fees_costs) {
    gsap.fromTo('#rs-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_risks_common_mistakes = document.getElementById('rs-appeals-list-risks-common-mistakes');
  if (rs_appeals_list_risks_common_mistakes) {
    gsap.from('#rs-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_diy_vs_professional_assistance = document.getElementById('rs-appeals-section-diy-vs-professional-assistance');
  if (rs_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_rio_grande_do_sul_specific_context = document.getElementById('rs-appeals-section-rio-grande-do-sul-specific-context');
  if (rs_appeals_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-appeals-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_what_our_clients_say = document.getElementById('rs-appeals-section-what-our-clients-say');
  if (rs_appeals_section_what_our_clients_say) {
    gsap.fromTo('#rs-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_frequently_asked_questions = document.getElementById('rs-appeals-section-frequently-asked-questions');
  if (rs_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#rs-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_international_support = document.getElementById('rs-appeals-section-international-support');
  if (rs_appeals_section_international_support) {
    gsap.fromTo('#rs-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_our_credentials = document.getElementById('rs-appeals-list-our-credentials');
  if (rs_appeals_list_our_credentials) {
    gsap.from('#rs-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_list_related_services = document.getElementById('rs-appeals-list-related-services');
  if (rs_appeals_list_related_services) {
    gsap.from('#rs-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_youre_in_good_hands = document.getElementById('rs-appeals-section-youre-in-good-hands');
  if (rs_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#rs-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_appeals_section_21 = document.getElementById('rs-appeals-section-21');
  if (rs_appeals_section_21) {
    gsap.fromTo('#rs-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('rs-consular-form-consular-services-in-brazil-for-citizens');
  if (rs_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#rs-consular-form-consular-services-in-brazil-for-citizens input, #rs-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_quick_facts = document.getElementById('rs-consular-list-quick-facts');
  if (rs_consular_list_quick_facts) {
    gsap.from('#rs-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_common_challenges_applicants_face = document.getElementById('rs-consular-list-common-challenges-applicants-face');
  if (rs_consular_list_common_challenges_applicants_face) {
    gsap.from('#rs-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_how_we_solve_these_challenges = document.getElementById('rs-consular-list-how-we-solve-these-challenges');
  if (rs_consular_list_how_we_solve_these_challenges) {
    gsap.from('#rs-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_service_overview = document.getElementById('rs-consular-section-service-overview');
  if (rs_consular_section_service_overview) {
    gsap.fromTo('#rs-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_form_who_is_this_service_for = document.getElementById('rs-consular-form-who-is-this-service-for');
  if (rs_consular_form_who_is_this_service_for) {
    gsap.from('#rs-consular-form-who-is-this-service-for input, #rs-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_required_documents = document.getElementById('rs-consular-list-required-documents');
  if (rs_consular_list_required_documents) {
    gsap.from('#rs-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_process = document.getElementById('rs-consular-list-process');
  if (rs_consular_list_process) {
    gsap.from('#rs-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_timelines_deadlines = document.getElementById('rs-consular-section-timelines-deadlines');
  if (rs_consular_section_timelines_deadlines) {
    gsap.fromTo('#rs-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_fees_costs = document.getElementById('rs-consular-section-fees-costs');
  if (rs_consular_section_fees_costs) {
    gsap.fromTo('#rs-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_risks_common_mistakes = document.getElementById('rs-consular-list-risks-common-mistakes');
  if (rs_consular_list_risks_common_mistakes) {
    gsap.from('#rs-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_diy_vs_professional_assistance = document.getElementById('rs-consular-section-diy-vs-professional-assistance');
  if (rs_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_rio_grande_do_sul_specific_context = document.getElementById('rs-consular-section-rio-grande-do-sul-specific-context');
  if (rs_consular_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-consular-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_what_our_clients_say = document.getElementById('rs-consular-section-what-our-clients-say');
  if (rs_consular_section_what_our_clients_say) {
    gsap.fromTo('#rs-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_frequently_asked_questions = document.getElementById('rs-consular-section-frequently-asked-questions');
  if (rs_consular_section_frequently_asked_questions) {
    gsap.fromTo('#rs-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_international_support = document.getElementById('rs-consular-section-international-support');
  if (rs_consular_section_international_support) {
    gsap.fromTo('#rs-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_our_credentials = document.getElementById('rs-consular-list-our-credentials');
  if (rs_consular_list_our_credentials) {
    gsap.from('#rs-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_list_related_services = document.getElementById('rs-consular-list-related-services');
  if (rs_consular_list_related_services) {
    gsap.from('#rs-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_youre_in_good_hands = document.getElementById('rs-consular-section-youre-in-good-hands');
  if (rs_consular_section_youre_in_good_hands) {
    gsap.fromTo('#rs-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_consular_section_21 = document.getElementById('rs-consular-section-21');
  if (rs_consular_section_21) {
    gsap.fromTo('#rs-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('rs-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (rs_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#rs-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #rs-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_quick_facts = document.getElementById('rs-criminalrecords-list-quick-facts');
  if (rs_criminalrecords_list_quick_facts) {
    gsap.from('#rs-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_common_challenges_applicants_face = document.getElementById('rs-criminalrecords-list-common-challenges-applicants-face');
  if (rs_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#rs-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('rs-criminalrecords-list-how-we-solve-these-challenges');
  if (rs_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#rs-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_service_overview = document.getElementById('rs-criminalrecords-section-service-overview');
  if (rs_criminalrecords_section_service_overview) {
    gsap.fromTo('#rs-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_form_who_is_this_service_for = document.getElementById('rs-criminalrecords-form-who-is-this-service-for');
  if (rs_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#rs-criminalrecords-form-who-is-this-service-for input, #rs-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_required_documents = document.getElementById('rs-criminalrecords-list-required-documents');
  if (rs_criminalrecords_list_required_documents) {
    gsap.from('#rs-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_process = document.getElementById('rs-criminalrecords-list-process');
  if (rs_criminalrecords_list_process) {
    gsap.from('#rs-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_timelines_deadlines = document.getElementById('rs-criminalrecords-section-timelines-deadlines');
  if (rs_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#rs-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_fees_costs = document.getElementById('rs-criminalrecords-section-fees-costs');
  if (rs_criminalrecords_section_fees_costs) {
    gsap.fromTo('#rs-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_risks_common_mistakes = document.getElementById('rs-criminalrecords-list-risks-common-mistakes');
  if (rs_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#rs-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('rs-criminalrecords-section-diy-vs-professional-assistance');
  if (rs_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_rio_grande_do_sul_specific_context = document.getElementById('rs-criminalrecords-section-rio-grande-do-sul-specific-context');
  if (rs_criminalrecords_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-criminalrecords-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_what_our_clients_say = document.getElementById('rs-criminalrecords-section-what-our-clients-say');
  if (rs_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#rs-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_frequently_asked_questions = document.getElementById('rs-criminalrecords-section-frequently-asked-questions');
  if (rs_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#rs-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_international_support = document.getElementById('rs-criminalrecords-section-international-support');
  if (rs_criminalrecords_section_international_support) {
    gsap.fromTo('#rs-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_our_credentials = document.getElementById('rs-criminalrecords-list-our-credentials');
  if (rs_criminalrecords_list_our_credentials) {
    gsap.from('#rs-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_list_related_services = document.getElementById('rs-criminalrecords-list-related-services');
  if (rs_criminalrecords_list_related_services) {
    gsap.from('#rs-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_youre_in_good_hands = document.getElementById('rs-criminalrecords-section-youre-in-good-hands');
  if (rs_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#rs-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_criminalrecords_section_21 = document.getElementById('rs-criminalrecords-section-21');
  if (rs_criminalrecords_section_21) {
    gsap.fromTo('#rs-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_form_extradition_assistance_in_brazil = document.getElementById('rs-extradition-form-extradition-assistance-in-brazil');
  if (rs_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#rs-extradition-form-extradition-assistance-in-brazil input, #rs-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_quick_facts = document.getElementById('rs-extradition-list-quick-facts');
  if (rs_extradition_list_quick_facts) {
    gsap.from('#rs-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_common_challenges_applicants_face = document.getElementById('rs-extradition-list-common-challenges-applicants-face');
  if (rs_extradition_list_common_challenges_applicants_face) {
    gsap.from('#rs-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_how_we_solve_these_challenges = document.getElementById('rs-extradition-list-how-we-solve-these-challenges');
  if (rs_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#rs-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_service_overview = document.getElementById('rs-extradition-section-service-overview');
  if (rs_extradition_section_service_overview) {
    gsap.fromTo('#rs-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_form_who_is_this_service_for = document.getElementById('rs-extradition-form-who-is-this-service-for');
  if (rs_extradition_form_who_is_this_service_for) {
    gsap.from('#rs-extradition-form-who-is-this-service-for input, #rs-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_required_documents = document.getElementById('rs-extradition-list-required-documents');
  if (rs_extradition_list_required_documents) {
    gsap.from('#rs-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_process = document.getElementById('rs-extradition-list-process');
  if (rs_extradition_list_process) {
    gsap.from('#rs-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_timelines_deadlines = document.getElementById('rs-extradition-section-timelines-deadlines');
  if (rs_extradition_section_timelines_deadlines) {
    gsap.fromTo('#rs-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_fees_costs = document.getElementById('rs-extradition-section-fees-costs');
  if (rs_extradition_section_fees_costs) {
    gsap.fromTo('#rs-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_risks_common_mistakes = document.getElementById('rs-extradition-list-risks-common-mistakes');
  if (rs_extradition_list_risks_common_mistakes) {
    gsap.from('#rs-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_diy_vs_professional_assistance = document.getElementById('rs-extradition-section-diy-vs-professional-assistance');
  if (rs_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_rio_grande_do_sul_specific_context = document.getElementById('rs-extradition-section-rio-grande-do-sul-specific-context');
  if (rs_extradition_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-extradition-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_what_our_clients_say = document.getElementById('rs-extradition-section-what-our-clients-say');
  if (rs_extradition_section_what_our_clients_say) {
    gsap.fromTo('#rs-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_frequently_asked_questions = document.getElementById('rs-extradition-section-frequently-asked-questions');
  if (rs_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#rs-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_international_support = document.getElementById('rs-extradition-section-international-support');
  if (rs_extradition_section_international_support) {
    gsap.fromTo('#rs-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_our_credentials = document.getElementById('rs-extradition-list-our-credentials');
  if (rs_extradition_list_our_credentials) {
    gsap.from('#rs-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_list_related_services = document.getElementById('rs-extradition-list-related-services');
  if (rs_extradition_list_related_services) {
    gsap.from('#rs-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_youre_in_good_hands = document.getElementById('rs-extradition-section-youre-in-good-hands');
  if (rs_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#rs-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_extradition_section_21 = document.getElementById('rs-extradition-section-21');
  if (rs_extradition_section_21) {
    gsap.fromTo('#rs-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_form_discover_the_north_amazon_and_beyond = document.getElementById('rs-north-form-discover-the-north-amazon-and-beyond');
  if (rs_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#rs-north-form-discover-the-north-amazon-and-beyond input, #rs-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_quick_facts = document.getElementById('rs-north-list-quick-facts');
  if (rs_north_list_quick_facts) {
    gsap.from('#rs-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_common_challenges_applicants_face = document.getElementById('rs-north-list-common-challenges-applicants-face');
  if (rs_north_list_common_challenges_applicants_face) {
    gsap.from('#rs-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_how_we_solve_these_challenges = document.getElementById('rs-north-list-how-we-solve-these-challenges');
  if (rs_north_list_how_we_solve_these_challenges) {
    gsap.from('#rs-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_trip_overview = document.getElementById('rs-north-section-trip-overview');
  if (rs_north_section_trip_overview) {
    gsap.fromTo('#rs-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_form_who_is_this_trip_for = document.getElementById('rs-north-form-who-is-this-trip-for');
  if (rs_north_form_who_is_this_trip_for) {
    gsap.from('#rs-north-form-who-is-this-trip-for input, #rs-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_required_documents = document.getElementById('rs-north-list-required-documents');
  if (rs_north_list_required_documents) {
    gsap.from('#rs-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_booking_process = document.getElementById('rs-north-list-booking-process');
  if (rs_north_list_booking_process) {
    gsap.from('#rs-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_timelines_deadlines = document.getElementById('rs-north-section-timelines-deadlines');
  if (rs_north_section_timelines_deadlines) {
    gsap.fromTo('#rs-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_fees_costs = document.getElementById('rs-north-section-fees-costs');
  if (rs_north_section_fees_costs) {
    gsap.fromTo('#rs-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_risks_common_mistakes = document.getElementById('rs-north-list-risks-common-mistakes');
  if (rs_north_list_risks_common_mistakes) {
    gsap.from('#rs-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_diy_vs_professional_assistance = document.getElementById('rs-north-section-diy-vs-professional-assistance');
  if (rs_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_rio_grande_do_sul_specific_context = document.getElementById('rs-north-section-rio-grande-do-sul-specific-context');
  if (rs_north_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-north-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_what_our_clients_say = document.getElementById('rs-north-section-what-our-clients-say');
  if (rs_north_section_what_our_clients_say) {
    gsap.fromTo('#rs-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_frequently_asked_questions = document.getElementById('rs-north-section-frequently-asked-questions');
  if (rs_north_section_frequently_asked_questions) {
    gsap.fromTo('#rs-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_international_support = document.getElementById('rs-north-section-international-support');
  if (rs_north_section_international_support) {
    gsap.fromTo('#rs-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_our_credentials = document.getElementById('rs-north-list-our-credentials');
  if (rs_north_list_our_credentials) {
    gsap.from('#rs-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_list_related_services = document.getElementById('rs-north-list-related-services');
  if (rs_north_list_related_services) {
    gsap.from('#rs-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_youre_in_good_hands = document.getElementById('rs-north-section-youre-in-good-hands');
  if (rs_north_section_youre_in_good_hands) {
    gsap.fromTo('#rs-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_north_section_21 = document.getElementById('rs-north-section-21');
  if (rs_north_section_21) {
    gsap.fromTo('#rs-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('rs-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (rs_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#rs-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #rs-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_quick_facts = document.getElementById('rs-centralwest-list-quick-facts');
  if (rs_centralwest_list_quick_facts) {
    gsap.from('#rs-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_common_challenges_applicants_face = document.getElementById('rs-centralwest-list-common-challenges-applicants-face');
  if (rs_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#rs-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_how_we_solve_these_challenges = document.getElementById('rs-centralwest-list-how-we-solve-these-challenges');
  if (rs_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#rs-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_trip_overview = document.getElementById('rs-centralwest-section-trip-overview');
  if (rs_centralwest_section_trip_overview) {
    gsap.fromTo('#rs-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_form_who_is_this_trip_for = document.getElementById('rs-centralwest-form-who-is-this-trip-for');
  if (rs_centralwest_form_who_is_this_trip_for) {
    gsap.from('#rs-centralwest-form-who-is-this-trip-for input, #rs-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_required_documents = document.getElementById('rs-centralwest-list-required-documents');
  if (rs_centralwest_list_required_documents) {
    gsap.from('#rs-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_booking_process = document.getElementById('rs-centralwest-list-booking-process');
  if (rs_centralwest_list_booking_process) {
    gsap.from('#rs-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_timelines_deadlines = document.getElementById('rs-centralwest-section-timelines-deadlines');
  if (rs_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#rs-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_fees_costs = document.getElementById('rs-centralwest-section-fees-costs');
  if (rs_centralwest_section_fees_costs) {
    gsap.fromTo('#rs-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_risks_common_mistakes = document.getElementById('rs-centralwest-list-risks-common-mistakes');
  if (rs_centralwest_list_risks_common_mistakes) {
    gsap.from('#rs-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_diy_vs_professional_assistance = document.getElementById('rs-centralwest-section-diy-vs-professional-assistance');
  if (rs_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_rio_grande_do_sul_specific_context = document.getElementById('rs-centralwest-section-rio-grande-do-sul-specific-context');
  if (rs_centralwest_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-centralwest-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_what_our_clients_say = document.getElementById('rs-centralwest-section-what-our-clients-say');
  if (rs_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#rs-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_frequently_asked_questions = document.getElementById('rs-centralwest-section-frequently-asked-questions');
  if (rs_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#rs-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_international_support = document.getElementById('rs-centralwest-section-international-support');
  if (rs_centralwest_section_international_support) {
    gsap.fromTo('#rs-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_our_credentials = document.getElementById('rs-centralwest-list-our-credentials');
  if (rs_centralwest_list_our_credentials) {
    gsap.from('#rs-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_list_related_services = document.getElementById('rs-centralwest-list-related-services');
  if (rs_centralwest_list_related_services) {
    gsap.from('#rs-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_youre_in_good_hands = document.getElementById('rs-centralwest-section-youre-in-good-hands');
  if (rs_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#rs-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_centralwest_section_21 = document.getElementById('rs-centralwest-section-21');
  if (rs_centralwest_section_21) {
    gsap.fromTo('#rs-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('rs-southeast-form-dynamic-southeast-cities-and-history');
  if (rs_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#rs-southeast-form-dynamic-southeast-cities-and-history input, #rs-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_quick_facts = document.getElementById('rs-southeast-list-quick-facts');
  if (rs_southeast_list_quick_facts) {
    gsap.from('#rs-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_common_challenges_applicants_face = document.getElementById('rs-southeast-list-common-challenges-applicants-face');
  if (rs_southeast_list_common_challenges_applicants_face) {
    gsap.from('#rs-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_how_we_solve_these_challenges = document.getElementById('rs-southeast-list-how-we-solve-these-challenges');
  if (rs_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#rs-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_trip_overview = document.getElementById('rs-southeast-section-trip-overview');
  if (rs_southeast_section_trip_overview) {
    gsap.fromTo('#rs-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_form_who_is_this_trip_for = document.getElementById('rs-southeast-form-who-is-this-trip-for');
  if (rs_southeast_form_who_is_this_trip_for) {
    gsap.from('#rs-southeast-form-who-is-this-trip-for input, #rs-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_required_documents = document.getElementById('rs-southeast-list-required-documents');
  if (rs_southeast_list_required_documents) {
    gsap.from('#rs-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_booking_process = document.getElementById('rs-southeast-list-booking-process');
  if (rs_southeast_list_booking_process) {
    gsap.from('#rs-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_timelines_deadlines = document.getElementById('rs-southeast-section-timelines-deadlines');
  if (rs_southeast_section_timelines_deadlines) {
    gsap.fromTo('#rs-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_fees_costs = document.getElementById('rs-southeast-section-fees-costs');
  if (rs_southeast_section_fees_costs) {
    gsap.fromTo('#rs-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_risks_common_mistakes = document.getElementById('rs-southeast-list-risks-common-mistakes');
  if (rs_southeast_list_risks_common_mistakes) {
    gsap.from('#rs-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_diy_vs_professional_assistance = document.getElementById('rs-southeast-section-diy-vs-professional-assistance');
  if (rs_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_rio_grande_do_sul_specific_context = document.getElementById('rs-southeast-section-rio-grande-do-sul-specific-context');
  if (rs_southeast_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-southeast-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_what_our_clients_say = document.getElementById('rs-southeast-section-what-our-clients-say');
  if (rs_southeast_section_what_our_clients_say) {
    gsap.fromTo('#rs-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_frequently_asked_questions = document.getElementById('rs-southeast-section-frequently-asked-questions');
  if (rs_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#rs-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_international_support = document.getElementById('rs-southeast-section-international-support');
  if (rs_southeast_section_international_support) {
    gsap.fromTo('#rs-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_our_credentials = document.getElementById('rs-southeast-list-our-credentials');
  if (rs_southeast_list_our_credentials) {
    gsap.from('#rs-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_list_related_services = document.getElementById('rs-southeast-list-related-services');
  if (rs_southeast_list_related_services) {
    gsap.from('#rs-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_youre_in_good_hands = document.getElementById('rs-southeast-section-youre-in-good-hands');
  if (rs_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#rs-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_southeast_section_21 = document.getElementById('rs-southeast-section-21');
  if (rs_southeast_section_21) {
    gsap.fromTo('#rs-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('rs-northeast-form-vibrant-northeast-beaches-and-culture');
  if (rs_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#rs-northeast-form-vibrant-northeast-beaches-and-culture input, #rs-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_quick_facts = document.getElementById('rs-northeast-list-quick-facts');
  if (rs_northeast_list_quick_facts) {
    gsap.from('#rs-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_common_challenges_applicants_face = document.getElementById('rs-northeast-list-common-challenges-applicants-face');
  if (rs_northeast_list_common_challenges_applicants_face) {
    gsap.from('#rs-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_how_we_solve_these_challenges = document.getElementById('rs-northeast-list-how-we-solve-these-challenges');
  if (rs_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#rs-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_trip_overview = document.getElementById('rs-northeast-section-trip-overview');
  if (rs_northeast_section_trip_overview) {
    gsap.fromTo('#rs-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_form_who_is_this_trip_for = document.getElementById('rs-northeast-form-who-is-this-trip-for');
  if (rs_northeast_form_who_is_this_trip_for) {
    gsap.from('#rs-northeast-form-who-is-this-trip-for input, #rs-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_required_documents = document.getElementById('rs-northeast-list-required-documents');
  if (rs_northeast_list_required_documents) {
    gsap.from('#rs-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_booking_process = document.getElementById('rs-northeast-list-booking-process');
  if (rs_northeast_list_booking_process) {
    gsap.from('#rs-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_timelines_deadlines = document.getElementById('rs-northeast-section-timelines-deadlines');
  if (rs_northeast_section_timelines_deadlines) {
    gsap.fromTo('#rs-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_fees_costs = document.getElementById('rs-northeast-section-fees-costs');
  if (rs_northeast_section_fees_costs) {
    gsap.fromTo('#rs-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_risks_common_mistakes = document.getElementById('rs-northeast-list-risks-common-mistakes');
  if (rs_northeast_list_risks_common_mistakes) {
    gsap.from('#rs-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_diy_vs_professional_assistance = document.getElementById('rs-northeast-section-diy-vs-professional-assistance');
  if (rs_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_rio_grande_do_sul_specific_context = document.getElementById('rs-northeast-section-rio-grande-do-sul-specific-context');
  if (rs_northeast_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-northeast-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_what_our_clients_say = document.getElementById('rs-northeast-section-what-our-clients-say');
  if (rs_northeast_section_what_our_clients_say) {
    gsap.fromTo('#rs-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_frequently_asked_questions = document.getElementById('rs-northeast-section-frequently-asked-questions');
  if (rs_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#rs-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_international_support = document.getElementById('rs-northeast-section-international-support');
  if (rs_northeast_section_international_support) {
    gsap.fromTo('#rs-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_our_credentials = document.getElementById('rs-northeast-list-our-credentials');
  if (rs_northeast_list_our_credentials) {
    gsap.from('#rs-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_list_related_services = document.getElementById('rs-northeast-list-related-services');
  if (rs_northeast_list_related_services) {
    gsap.from('#rs-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_youre_in_good_hands = document.getElementById('rs-northeast-section-youre-in-good-hands');
  if (rs_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#rs-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_northeast_section_21 = document.getElementById('rs-northeast-section-21');
  if (rs_northeast_section_21) {
    gsap.fromTo('#rs-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_form_charming_south_wine_and_gauchos = document.getElementById('rs-south-form-charming-south-wine-and-gauchos');
  if (rs_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#rs-south-form-charming-south-wine-and-gauchos input, #rs-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_quick_facts = document.getElementById('rs-south-list-quick-facts');
  if (rs_south_list_quick_facts) {
    gsap.from('#rs-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_common_challenges_applicants_face = document.getElementById('rs-south-list-common-challenges-applicants-face');
  if (rs_south_list_common_challenges_applicants_face) {
    gsap.from('#rs-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_how_we_solve_these_challenges = document.getElementById('rs-south-list-how-we-solve-these-challenges');
  if (rs_south_list_how_we_solve_these_challenges) {
    gsap.from('#rs-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_trip_overview = document.getElementById('rs-south-section-trip-overview');
  if (rs_south_section_trip_overview) {
    gsap.fromTo('#rs-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_form_who_is_this_trip_for = document.getElementById('rs-south-form-who-is-this-trip-for');
  if (rs_south_form_who_is_this_trip_for) {
    gsap.from('#rs-south-form-who-is-this-trip-for input, #rs-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_required_documents = document.getElementById('rs-south-list-required-documents');
  if (rs_south_list_required_documents) {
    gsap.from('#rs-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_booking_process = document.getElementById('rs-south-list-booking-process');
  if (rs_south_list_booking_process) {
    gsap.from('#rs-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_timelines_deadlines = document.getElementById('rs-south-section-timelines-deadlines');
  if (rs_south_section_timelines_deadlines) {
    gsap.fromTo('#rs-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_fees_costs = document.getElementById('rs-south-section-fees-costs');
  if (rs_south_section_fees_costs) {
    gsap.fromTo('#rs-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_risks_common_mistakes = document.getElementById('rs-south-list-risks-common-mistakes');
  if (rs_south_list_risks_common_mistakes) {
    gsap.from('#rs-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_diy_vs_professional_assistance = document.getElementById('rs-south-section-diy-vs-professional-assistance');
  if (rs_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rs-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_rio_grande_do_sul_specific_context = document.getElementById('rs-south-section-rio-grande-do-sul-specific-context');
  if (rs_south_section_rio_grande_do_sul_specific_context) {
    gsap.fromTo('#rs-south-section-rio-grande-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_what_our_clients_say = document.getElementById('rs-south-section-what-our-clients-say');
  if (rs_south_section_what_our_clients_say) {
    gsap.fromTo('#rs-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_frequently_asked_questions = document.getElementById('rs-south-section-frequently-asked-questions');
  if (rs_south_section_frequently_asked_questions) {
    gsap.fromTo('#rs-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_international_support = document.getElementById('rs-south-section-international-support');
  if (rs_south_section_international_support) {
    gsap.fromTo('#rs-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_our_credentials = document.getElementById('rs-south-list-our-credentials');
  if (rs_south_list_our_credentials) {
    gsap.from('#rs-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_list_related_services = document.getElementById('rs-south-list-related-services');
  if (rs_south_list_related_services) {
    gsap.from('#rs-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_youre_in_good_hands = document.getElementById('rs-south-section-youre-in-good-hands');
  if (rs_south_section_youre_in_good_hands) {
    gsap.fromTo('#rs-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

  const rs_south_section_21 = document.getElementById('rs-south-section-21');
  if (rs_south_section_21) {
    gsap.fromTo('#rs-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.72, ease: 'back.out(1.7)'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
