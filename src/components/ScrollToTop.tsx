import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function ScrollToTop() {
	const { pathname, hash, key } = useLocation();
	useEffect(() => {
		console.log("hit");
		if(hash === ''){
			window.scrollTo(0, 0);
		} else {
			setTimeout(() => {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element && !pathname.includes("dei")) {
					let yOffset = 40;
					const y = element?.getBoundingClientRect().top + window.scrollY - yOffset;
					window.scrollTo({top: y, behavior: 'smooth'});
				}
			}, 0);
		}
	}, [pathname, hash, key]);

	return null;
}

export default ScrollToTop;