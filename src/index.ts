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
