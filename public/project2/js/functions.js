//PC/SP判定
let spFlag = false
let pcFlag = false
$(window).on("load resize", function () {
	const winW = $(this).width()
	if (winW <= 768) {
		//SPサイズになったとき
		if (!spFlag) {
			spFlag = true
			pcFlag = false
		}
	} else {
		//PCサイズになったとき
		if (!pcFlag) {
			spFlag = false
			pcFlag = true
		}
	}
})

/* スムーズスクロール */
$('a[href^="#"]').on("click", function (e) {
	e.preventDefault()
	const targetPos = $($(this).attr("href")).offset().top
	$("body,html").animate({ scrollTop: targetPos }, 500)
})

/* トップに戻るボタン */
$(".pagetopBtn a").on("click", function (e) {
	$("html,body").animate({ scrollTop: 0 }, 600)
	e.preventDefault()
})

$(".fixAnchorNav__btn a").on("click", function (e) {
	if ($(".fixAnchorNav__listWrap").hasClass("show")) {
		$(".fixAnchorNav__listWrap").removeClass("show")
	} else {
		$(".fixAnchorNav__listWrap").addClass("show")
	}
	e.preventDefault()
})

$(".fixAnchorNav__close").on("click", function (e) {
	$(".fixAnchorNav__listWrap").addClass("hideLoad")
	setTimeout(function () {
		$(".fixAnchorNav__listWrap").removeClass("show")
		$(".fixAnchorNav__listWrap").removeClass("hideLoad")
		e.preventDefault()
	}, 500)
	e.preventDefault()
})

$(".fixAnchorNavBtn").on("click", function (e) {
	$(".fixAnchorNav__listWrap").addClass("hideLoad")
	setTimeout(function () {
		$(".fixAnchorNav__listWrap").removeClass("show")
		$(".fixAnchorNav__listWrap").removeClass("hideLoad")
		e.preventDefault()
	}, 500)
	e.preventDefault()
})

$(window).on("load resize", function () {
	if (spFlag) {
		$(".itemSection__leadBlock__image__space").each(function () {
			let parentHeight = $(this).parent(".itemSection__leadBlock__text").height()
			let nextImage = parentHeight * 0.6
			let leadBlockImageMargin = parentHeight * 0.4
			$(this).next(".itemSection__leadBlock__image").css({ height: nextImage })
			$(this).css({ height: leadBlockImageMargin })
		})
	}
})

/* スクロール */
$(window).on("scroll", function () {
	const winH = $(window).height()
	let scrVal = $(window).scrollTop()
	// 暖かさメーター
	$(".itemInfoArea__meterBlock").each(function () {
		const thisPos = $(this).offset().top - (winH * 3) / 4
		const thisW = $(this).width()
		const thisWarm = $(this).find(".itemInfoArea__meter").data("warm")
		const thisWarmVal = thisW * (thisWarm / 100)
		if (thisPos < scrVal) {
			$(this)
				.find(".itemInfoArea__meter__arrow")
				.css({
					transform: "translateX(" + thisWarmVal + "px)",
				})
		}
	})

	//アンカー
	const anchorPos = $(".pageAnchor").offset().top - winH / 2
	if (anchorPos < scrVal) {
		$(".pageAnchor__list li").addClass("is-show")
	}

	// 画像サイドからイン
	$(".has-imageInSide").each(function () {
		const thisPos = $(this).offset().top - winH / 2
		if (thisPos < scrVal) {
			$(this).addClass("is-show")
		}
	})
	// 画像フェードイン
	$(".has-imageInFade").each(function () {
		const thisPos = $(this).offset().top - winH / 2
		if (thisPos < scrVal) {
			$(this).addClass("is-show")
		}
	})
	// 小→大
	$(".has-imageInScale").each(function () {
		const thisPos = $(this).offset().top - winH / 2
		if (thisPos < scrVal) {
			$(this).addClass("is-show")
		}
	})

	if ($(window).scrollTop() > 500) {
		$(".fixAnchorNav").addClass("scroll")
	} else {
		$(".fixAnchorNav").removeClass("scroll")
	}
})
