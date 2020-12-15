import eyeBlueIcon from "../assets/svg/eye_blue.js";

export default (billUrl) => {
	return `<div class="icon-actions">
      <div id="eye" data-testid="icon-eye" data-bill-url=${billUrl}>
      ${eyeBlueIcon}
      </div>
    </div>`;
}; //Bug here because the brackets where not properly closed (previous ')})

