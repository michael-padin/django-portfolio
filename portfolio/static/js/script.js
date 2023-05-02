$(document).ready(() => {
	const validateForm = (e) => {
		e.preventDefault();
		const emailChecker = /(.+)@(.+){2,}\.(.+){2,}/;
		const nameChecker = /^[^0-9]+$/;
		const email = $("#email").val();
		const name = $("#name").val();

		if (!emailChecker.test(email)) {
			$(".email-error").text("Invalid email!");
			return;
		}

		if (!nameChecker.test(name)) {
			$(".name-error").text("Invalid name!");
			return;
		}

		$(".email-error").text("");
		$(".name-error").text("");
		$("#email").val("");
		$("#name").val("");
		$("#message").val("");

		sendResponse();
	};

	const sendResponse = () => {
		const thankYouRes = `
        <div class="thankyou-msg-wrapper">
        <div class="msg-container"> 	
        
            <div class="close-container">
                <?xml version="1.0" encoding="utf-8"?>

                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Menu / Close_MD">
                        <path
                            id="Vector"
                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </svg>
            </div>Thank you for getting in touch!</div>
        </div>
        `;

		$(thankYouRes).appendTo("body");
		$(".msg-container").toggleClass("popup");

		$(".close-container").on("click", () => {
			$(".msg-container").toggleClass("popout");

			setTimeout(() => {
				$(".thankyou-msg-wrapper").remove();
			}, 100);

			$(".");
		});
	};

	/* VALIDATE FORM DATA HERE */
	$("#messageForm").on("submit", validateForm);
});
