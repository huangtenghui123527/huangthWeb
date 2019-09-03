<template>
    <div>
                <div class="navbar-wrapper">
    <div class="container">
		<nav class="navbar navbar-inverse navbar-static-top cl-effect-20">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.html">Outing</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse navbar-right">
					<ul class="nav navbar-nav">
						<li><a href="#"><span data-hover="Home">Home</span></a></li>
						<li><a href="#about"><span data-hover="About">About</span></a></li>
						<li><a href="#service"><span data-hover="Services">Services</span></a></li>
						<li><a href="#events"><span data-hover="Events">Events</span></a></li>
						<li><a href="#gallery"><span data-hover="Gallery">Gallery</span></a></li>
						<li><a href="#testimonials"><span data-hover="Testimonials">Testimonials</span></a></li>
						<li><a href="#contact"><span data-hover="Contact">Contact</span></a></li>
					</ul>
				</div>
			</div>
        </nav>
    </div>
</div>

    </div>
</template>
<script>

export default {
    name:"TecOne"
}
</script>
<style lang="scss" scoped>
        .cl-effect-20 a {
	line-height: 2em;
	-webkit-perspective: 800px;
	-moz-perspective: 800px;
	perspective: 800px;
}

.cl-effect-20 a span {
	font-size: 19px;
    color: #fff;
	position: relative;
	display: inline-block;
	padding: 15px 15px;
	background:transparent;
	box-shadow: inset 0 3px rgb(231, 233, 234);
	-webkit-transition: background 0.6s;
	-moz-transition: background 0.6s;
	transition: background 0.6s;
	-webkit-transform-origin: 50% 0;
	-moz-transform-origin: 50% 0;
	transform-origin: 50% 0;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transform-origin: 0% 50%;
	-moz-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
}

.cl-effect-20 a span::before {
	padding: 15px 15px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	color: #2f4351;
	/*-- W3layouts --*/
	content: attr(data-hover);
	-webkit-transform: rotateX(270deg);
	-moz-transform: rotateX(270deg);
	transform: rotateX(270deg);
	-webkit-transition: -webkit-transform 0.6s;
	-moz-transition: -moz-transform 0.6s;
	transition: transform 0.6s;
	-webkit-transform-origin: 0 0;
	-moz-transform-origin: 0 0;
	transform-origin: 0 0;
	pointer-events: none;
}

.cl-effect-20 a:hover span,
.cl-effect-20 a:focus span {
	background: #2f4351;
}

.cl-effect-20 a:hover span::before,
.cl-effect-20 a:focus span::before {
	-webkit-transform: rotateX(10deg);	
	-moz-transform: rotateX(10deg);
	transform: rotateX(10deg);
}
.tlinks{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}
.navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {
    margin-left: -15px;
    margin-top: -7px;
    color: #fff;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 30px;
	font-family: 'Montserrat', sans-serif;
}
.navbar-wrapper {
	position: absolute;
	top: 90px;
	right: 0;
	left: 0;
	z-index: 20;
}
.navbar-wrapper > .container {
	padding-right: 0;
	padding-left: 0;
}
.navbar-wrapper .navbar {
	padding-right: 15px;
	padding-left: 15px;
}
.navbar-wrapper .navbar .container {
	width: auto;
}
.navbar-inverse {
    background-color:transparent;
    border-color:transparent;
}
@media (min-width: 768px) {
	.navbar-wrapper {
	margin-top: 20px;
}
	.navbar-wrapper .container {
	padding-right: 15px;
    padding-left: 15px;
}
	.navbar-wrapper .navbar {
    padding-right: 0;
    padding-left: 0;
}
	.navbar-wrapper .navbar {
    border-radius: 4px;
}
}

</style>