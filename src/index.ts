/**
 * Password Visibility
 */
const passwordInput = document.getElementById('password') as HTMLInputElement;
const passwordVisibilityButtons = document.querySelectorAll(
	'.password-visibility button'
) as NodeListOf<HTMLButtonElement>;

const changeButton = (): void => {
	passwordVisibilityButtons.forEach((button) =>
		button.classList.toggle('hidden')
	);
};

if (passwordInput && passwordVisibilityButtons.length) {
	passwordVisibilityButtons.forEach((button) =>
		button.addEventListener('click', () => {
			changeButton();

			const inputType: string = passwordInput.getAttribute('type');
			const newType: string = inputType === 'text' ? 'password' : 'text';

			passwordInput.setAttribute('type', newType);
		})
	);
}

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('#form', {
	reset: false,
	mobile: true,
	opacity: 0,
	distance: '15%',
	origin: 'bottom',
	duration: 1250,
	delay: 150,
	easing: 'ease-in-out',
});
