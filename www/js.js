//---------- Define variables --------------------//
var arrow_icon = document.querySelectorAll(".fa-angle-down");

//---------- Assign behavior to option buttons ---//
var dropdown = document.querySelector(".option-buttons-inner");

document.body.addEventListener("click", function(evt){
  if(dropdown.contains(evt.target)) return;
  else turnArrowsDown();
});

function assignButtons(button) {
  button.addEventListener("click", function(ev){
    if (this.getAttribute("aria-expanded") === "false") {
      turnArrowsDown();
      this.children[1].className = "fas fa-angle-down fa-flip-vertical";
    } else {
      this.children[1].className = "fas fa-angle-down";
    }
  });
}
assignButtons(document.querySelector("#btn-options"));
assignButtons(document.querySelector("#btn-weights"));
assignButtons(document.querySelector("#btn-interventions"));

function turnArrowsDown() {
  arrow_icon.forEach(function(icon){
    icon.className = "fas fa-angle-down";
  });
}

//---------- Expand plot ---------------------------//
var button_expand = document.querySelector("#button-expand");
var pref_plot = document.querySelector("#preferencePlot");
var navbar = document.querySelector(".navbar");
var getstarted = document.querySelector("#getstarted");

button_expand.addEventListener("click", function(){
  pref_plot.style.height = "auto";
  this.style.display = "none";
  navbar.style.display = "block";
  getstarted.style.display = "none";
});

//---------- Add behavior to overlay page-----------//
function on() {
    document.getElementById("overlay").style.display = "block";
//    document.body.style.overflow = "hidden";
}
function off() {
    document.getElementById("overlay").style.display = "none";
//    document.body.style.overflow = "auto";
}

//---------- Connect slider with numeric inputs ----//
function updateWeights(input, output) {
  document.getElementById(input).onchange = function() {
    document.getElementById(output).value = this.value;
  }
}
updateWeights("wgt_rec", "wgt_rec_val");
updateWeights("wgt_qua", "wgt_qua_val");
updateWeights("wgt_cos", "wgt_cos_val");
updateWeights("wgt_dur", "wgt_dur_val");
updateWeights("wgt_acc", "wgt_acc_val");
updateWeights("wgt_rmi", "wgt_rmi_val");
updateWeights("wgt_rse", "wgt_rse_val");
updateWeights("wgt_eff", "wgt_eff_val");
updateWeights("wgt_rec_ce", "wgt_rec_val_ce");
updateWeights("wgt_qua_ce", "wgt_qua_val_ce");
updateWeights("wgt_cos_ce", "wgt_cos_val_ce");
updateWeights("wgt_dur_ce", "wgt_dur_val_ce");
updateWeights("wgt_acc_ce", "wgt_acc_val_ce");
updateWeights("wgt_rmi_ce", "wgt_rmi_val_ce");
updateWeights("wgt_rse_ce", "wgt_rse_val_ce");
updateWeights("wgt_eff_ce", "wgt_eff_val_ce");

//---------- Show app even on small screen -----//
function showApp() {
	w3.hide('#small-screen');
	w3.show('.outer-tabs');
	w3.show('#source-text');
	w3.show('.navbar');
	w3.show('.tab-inner');
	$('#allInterventions').click();
}

function hidePlot(x) {
	if (x.matches) {
		w3.show('#small-screen');
		w3.hide('.outer-tabs');
		w3.hide('#source-text');
	} else {
		w3.hide('#small-screen');
		w3.show('.outer-tabs');
		w3.show('#source-text');
	}
}

var x = window.matchMedia('(max-width: 1199px)');
x.addListener(hidePlot);