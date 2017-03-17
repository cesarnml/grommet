'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-brand-apple-app-store', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'brand-apple-app-store');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 312 90', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M312,80.5601238 C312,85.5186793 307.983476,89.535203 303.015547,89.535203 L8.9961695,89.535203 C4.03058389,89.535203 0,85.5186793 0,80.5601238 L0,8.98679605 C0,4.03058389 4.03058389,0 8.9961695,0 L303.013204,0 C307.983476,0 311.997657,4.03058389 311.997657,8.98679605 L312,80.5601238 L312,80.5601238 L312,80.5601238 Z M68.5152394,44.2754953 C68.4472818,36.7228373 74.6993736,33.0484445 74.9852639,32.877379 C71.4444428,27.714951 65.9562873,27.0095988 64.0276997,26.9533581 C59.4183053,26.468282 54.9471692,29.711496 52.5991197,29.711496 C50.204203,29.711496 46.5883943,27.0002253 42.6913821,27.0798997 C37.6765859,27.1572306 32.9851737,30.060657 30.4121615,34.5692869 C25.1021015,43.7622989 29.0623845,57.271785 34.149825,64.7025882 C36.6947169,68.3418305 39.6684442,72.4052215 43.5607697,72.2622764 C47.3687341,72.1052711 48.7911553,69.8345526 53.3864896,69.8345526 C57.9396434,69.8345526 59.2753601,72.2622764 63.2450166,72.1708852 C67.3318412,72.1052711 69.9048535,68.5152394 72.3606976,64.84319 C75.3016178,60.6720043 76.4826726,56.5640895 76.5295399,56.3531868 C76.433462,56.3203797 68.5925703,53.3279055 68.5152394,44.2754953 L68.5152394,44.2754953 Z M61.0164786,22.0651034 C63.0645777,19.503808 64.4659086,16.0192276 64.0769104,12.4830932 C61.1125565,12.6143216 57.4053567,14.5335356 55.2705532,17.0385904 C53.3818029,19.2460381 51.6945817,22.8641901 52.1304472,26.2667528 C55.4603656,26.5151492 58.8793318,24.5865617 61.0164786,22.0651034 L61.0164786,22.0651034 Z M123.624101,71.7397065 L118.302324,71.7397065 L115.387181,62.5795016 L105.25448,62.5795016 L102.477595,71.7397065 L97.2964204,71.7397065 L107.335386,40.5542353 L113.535924,40.5542353 L123.624101,71.7397065 L123.624101,71.7397065 Z M114.50842,58.7363867 L111.872137,50.5932012 C111.593276,49.7613075 111.070706,47.8022562 110.29974,44.7183909 L110.206006,44.7183909 C109.899025,46.0447342 109.404576,48.0037854 108.725,50.5932012 L106.135585,58.7363867 L114.50842,58.7363867 L114.50842,58.7363867 Z M149.440928,60.2197353 C149.440928,64.0441033 148.407505,67.0670412 146.340659,69.2862057 C144.489402,71.2616605 142.190563,72.2482162 139.446486,72.2482162 C136.484475,72.2482162 134.356702,71.1843295 133.060822,69.0565562 L132.967088,69.0565562 L132.967088,80.9022547 L127.971038,80.9022547 L127.971038,56.6554806 C127.971038,54.2511905 127.907768,51.7836295 127.785913,49.2527978 L132.179718,49.2527978 L132.458578,52.8170525 L132.552313,52.8170525 C134.218443,50.1315588 136.746932,48.7911553 140.140121,48.7911553 C142.792808,48.7911553 145.007285,49.8386384 146.778868,51.9359481 C148.555137,54.0356011 149.440928,56.7960824 149.440928,60.2197353 L149.440928,60.2197353 Z M144.351144,60.4025176 C144.351144,58.2138168 143.859038,56.4094275 142.870139,54.9893497 C141.789848,53.5083445 140.339307,52.7678419 138.520857,52.7678419 C137.288249,52.7678419 136.168121,53.1802737 135.167505,53.9934206 C134.164546,54.8135975 133.508405,55.8845143 133.201424,57.2108576 C133.046762,57.8295053 132.969431,58.3356717 132.969431,58.7340434 L132.969431,62.4834237 C132.969431,64.1190909 133.470911,65.4993315 134.47387,66.626489 C135.476829,67.7536465 136.779739,68.3160535 138.382599,68.3160535 C140.264319,68.3160535 141.728921,67.5896111 142.776404,66.1414129 C143.826231,64.6908714 144.351144,62.7786874 144.351144,60.4025176 L144.351144,60.4025176 Z M175.304622,60.2197353 C175.304622,64.0441033 174.271199,67.0670412 172.20201,69.2862057 C170.353097,71.2616605 168.054258,72.2482162 165.31018,72.2482162 C162.34817,72.2482162 160.220396,71.1843295 158.92686,69.0565562 L158.833126,69.0565562 L158.833126,80.9022547 L153.837076,80.9022547 L153.837076,56.6554806 C153.837076,54.2511905 153.773805,51.7836295 153.651951,49.2527978 L158.045756,49.2527978 L158.324616,52.8170525 L158.41835,52.8170525 C160.082138,50.1315588 162.610626,48.7911553 166.006159,48.7911553 C168.656502,48.7911553 170.87098,49.8386384 172.647249,51.9359481 C174.416488,54.0356011 175.304622,56.7960824 175.304622,60.2197353 L175.304622,60.2197353 Z M170.214838,60.4025176 C170.214838,58.2138168 169.720389,56.4094275 168.73149,54.9893497 C167.651199,53.5083445 166.205345,52.7678419 164.384552,52.7678419 C163.1496,52.7678419 162.031816,53.1802737 161.028856,53.9934206 C160.025897,54.8135975 159.372099,55.8845143 159.065118,57.2108576 C158.9128,57.8295053 158.833126,58.3356717 158.833126,58.7340434 L158.833126,62.4834237 C158.833126,64.1190909 159.334605,65.4993315 160.332878,66.626489 C161.335837,67.7513031 162.638747,68.3160535 164.246293,68.3160535 C166.128014,68.3160535 167.592615,67.5896111 168.640099,66.1414129 C169.689925,64.6908714 170.214838,62.7786874 170.214838,60.4025176 L170.214838,60.4025176 Z M204.221718,62.9942768 C204.221718,65.6469634 203.300777,67.8052005 201.451863,69.4713314 C199.420168,71.2921242 196.591729,72.2013489 192.957174,72.2013489 C189.601478,72.2013489 186.911298,71.5545808 184.874916,70.2587012 L186.032537,66.0945457 C188.225924,67.420889 190.632558,68.086404 193.254781,68.086404 C195.136501,68.086404 196.601103,67.659912 197.653272,66.8116147 C198.700756,65.9633174 199.223325,64.8244431 199.223325,63.4043653 C199.223325,62.1389494 198.792147,61.0727194 197.927446,60.2080185 C197.067432,59.3433177 195.63095,58.5395442 193.625032,57.7966983 C188.164997,55.7603161 185.437323,52.7772153 185.437323,48.8544261 C185.437323,46.2907873 186.393415,44.1887909 188.307942,42.5531237 C190.215439,40.9151132 192.760331,40.0972796 195.942618,40.0972796 C198.78043,40.0972796 201.137853,40.5917291 203.019573,41.5782848 L201.770561,45.6510493 C200.013039,44.6949573 198.025867,44.2169113 195.802016,44.2169113 C194.044494,44.2169113 192.671283,44.6504334 191.687071,45.5127909 C190.855177,46.2837572 190.438059,47.2234456 190.438059,48.3365429 C190.438059,49.5691517 190.913761,50.5885145 191.869853,51.3899446 C192.701747,52.1304472 194.213216,52.9318772 196.406603,53.7965781 C199.089754,54.8768683 201.060522,56.1399408 202.328281,57.588139 C203.591354,59.0316504 204.221718,60.8383831 204.221718,62.9942768 L204.221718,62.9942768 Z M220.740082,53.0021781 L215.23318,53.0021781 L215.23318,63.9199051 C215.23318,66.6967899 216.203332,68.0840606 218.148323,68.0840606 C219.041144,68.0840606 219.781647,68.0067297 220.367487,67.8520677 L220.505746,71.645972 C219.521533,72.0138799 218.225654,72.1990056 216.62045,72.1990056 C214.647339,72.1990056 213.105406,71.5967614 211.992309,70.3946163 C210.883898,69.1901278 210.326178,67.1701492 210.326178,64.3323369 L210.326178,52.9974914 L207.04547,52.9974914 L207.04547,49.248111 L210.326178,49.248111 L210.326178,45.1308227 L215.23318,43.6498175 L215.23318,49.248111 L220.740082,49.248111 L220.740082,53.0021781 L220.740082,53.0021781 Z M245.586757,60.3111265 C245.586757,63.7675865 244.597858,66.6053987 242.624747,68.8245632 C240.555557,71.1093419 237.809136,72.2482162 234.385483,72.2482162 C231.086028,72.2482162 228.459119,71.1538658 226.500068,68.965165 C224.541016,66.7764642 223.561491,64.0136396 223.561491,60.6837211 C223.561491,57.1991408 224.569137,54.344925 226.591459,52.1257605 C228.609094,49.9042526 231.332082,48.7934987 234.755734,48.7934987 C238.055189,48.7934987 240.710219,49.8878491 242.713794,52.0788932 C244.630665,54.2043232 245.586757,56.948401 245.586757,60.3111265 L245.586757,60.3111265 Z M240.403239,60.4728185 C240.403239,58.3989425 239.960343,56.6203302 239.062835,55.1369816 C238.015352,53.3419657 236.517943,52.4468012 234.577639,52.4468012 C232.569377,52.4468012 231.043848,53.3443091 229.996365,55.1369816 C229.098857,56.6226735 228.655961,58.4294062 228.655961,60.566553 C228.655961,62.640429 229.098857,64.4190413 229.996365,65.9000466 C231.076655,67.6950624 232.585781,68.590227 234.533115,68.590227 C236.440612,68.590227 237.938021,67.6763155 239.018311,65.8531793 C239.939253,64.3417104 240.403239,62.5443511 240.403239,60.4728185 L240.403239,60.4728185 Z M261.826261,53.6466029 C261.331811,53.5552117 260.804555,53.5083445 260.251521,53.5083445 C258.493999,53.5083445 257.134849,54.1715161 256.178757,55.5002028 C255.346863,56.6718842 254.929744,58.1528894 254.929744,59.9408752 L254.929744,71.7397065 L249.936038,71.7397065 L249.982905,56.3344399 C249.982905,53.7426807 249.919635,51.3829145 249.795436,49.2551411 L254.147061,49.2551411 L254.329843,53.5575551 L254.468102,53.5575551 C254.995358,52.0788932 255.827252,50.8884649 256.966126,49.9956437 C258.079224,49.1918703 259.281369,48.7911553 260.577248,48.7911553 C261.038891,48.7911553 261.456009,48.8239624 261.826261,48.8825465 L261.826261,53.6466029 L261.826261,53.6466029 Z M284.170224,59.4323654 C284.170224,60.32753 284.11164,61.0820928 283.987442,61.6983972 L268.999294,61.6983972 C269.057878,63.9199051 269.781977,65.618843 271.173935,66.7905244 C272.437007,67.8380075 274.070331,68.3629208 276.076249,68.3629208 C278.295414,68.3629208 280.320079,68.009073 282.140872,67.2990341 L282.923555,70.7672109 C280.795782,71.6951826 278.283697,72.156825 275.384957,72.156825 C271.898034,72.156825 269.160986,71.1304322 267.169128,69.0799898 C265.181956,67.0295474 264.186027,64.2760962 264.186027,60.8219795 C264.186027,57.4311337 265.111655,54.6073816 266.965255,52.35541 C268.905559,49.9511199 271.527782,48.7489748 274.827237,48.7489748 C278.068108,48.7489748 280.521609,49.9511199 282.187739,52.35541 C283.507053,54.2652506 284.170224,56.6273603 284.170224,59.4323654 L284.170224,59.4323654 Z M279.406168,58.1364859 C279.438975,56.6554806 279.113248,55.3760046 278.436016,54.2957144 C277.571315,52.9061003 276.242628,52.2124649 274.454642,52.2124649 C272.821319,52.2124649 271.492632,52.8896967 270.477956,54.2488471 C269.646062,55.3291373 269.151613,56.6250169 268.999294,58.1341425 L279.406168,58.1341425 L279.406168,58.1364859 Z M112.856349,21.3691247 C112.856349,24.1272626 112.029142,26.203482 110.377071,27.5977828 C108.846855,28.884289 106.672215,29.5287137 103.855493,29.5287137 C102.458848,29.5287137 101.263733,29.4677863 100.263118,29.3459314 L100.263118,14.2757657 C101.568371,14.0648631 102.974388,13.9570684 104.492887,13.9570684 C107.176038,13.9570684 109.19836,14.5405657 110.562197,15.7075603 C112.090069,17.0268736 112.856349,18.9132806 112.856349,21.3691247 L112.856349,21.3691247 Z M110.266933,21.4370822 C110.266933,19.6490965 109.793574,18.2782293 108.846855,17.3221373 C107.900137,16.3683886 106.517553,15.8903426 104.69676,15.8903426 C103.92345,15.8903426 103.264965,15.9418966 102.718962,16.0496913 L102.718962,27.5063917 C103.021256,27.5532589 103.574289,27.5743492 104.378063,27.5743492 C106.257439,27.5743492 107.707981,27.0517793 108.729687,26.0066395 C109.751393,24.9614998 110.266933,23.438314 110.266933,21.4370822 L110.266933,21.4370822 Z M126.586111,23.7781016 C126.586111,25.4770396 126.101035,26.868997 125.130883,27.961004 C124.113863,29.0834748 122.76643,29.6435385 121.083895,29.6435385 C119.462288,29.6435385 118.171096,29.1069084 117.207973,28.0289616 C116.247195,26.9533581 115.766805,25.5965511 115.766805,23.9608839 C115.766805,22.2502291 116.261255,20.8465548 117.254841,19.7568911 C118.248426,18.6672275 119.584143,18.121224 121.266678,18.121224 C122.888285,18.121224 124.191194,18.657854 125.17775,19.7334575 C126.115095,20.7785973 126.586111,22.1283742 126.586111,23.7781016 L126.586111,23.7781016 Z M124.038876,23.8577759 C124.038876,22.8384131 123.8186,21.9643388 123.380391,21.235553 C122.864851,20.3544486 122.131379,19.9138964 121.17763,19.9138964 C120.191074,19.9138964 119.441198,20.3544486 118.925658,21.235553 C118.485106,21.9643388 118.267173,22.8524733 118.267173,23.9022998 C118.267173,24.9216626 118.487449,25.7957369 118.925658,26.5245227 C119.457602,27.4056271 120.198104,27.8461793 121.154196,27.8461793 C122.091541,27.8461793 122.827357,27.398597 123.356957,26.5010891 C123.81157,25.7582431 124.038876,24.8771387 124.038876,23.8577759 L124.038876,23.8577759 Z M144.995569,18.3461868 L141.539109,29.3927987 L139.28948,29.3927987 L137.857686,24.5959352 C137.494465,23.3984768 137.199201,22.2080485 136.969551,21.0269937 L136.925027,21.0269937 C136.711781,22.2408556 136.416518,23.4289405 136.036893,24.5959352 L134.516051,29.3927987 L132.240645,29.3927987 L128.990401,18.3461868 L131.514203,18.3461868 L132.763215,23.5976626 C133.065509,24.8396449 133.313905,26.0230431 133.513091,27.1431704 L133.557615,27.1431704 C133.740397,26.2198855 134.042691,25.0435174 134.469183,23.6210963 L136.036893,18.3485301 L138.038125,18.3485301 L139.54022,23.5086149 C139.903441,24.7670006 140.198705,25.9785192 140.426011,27.1455138 L140.493969,27.1455138 C140.660348,26.0089829 140.911087,24.7974644 141.243845,23.5086149 L142.584248,18.3485301 L144.995569,18.3485301 L144.995569,18.3461868 Z M157.727058,29.3927987 L155.271214,29.3927987 L155.271214,23.0657193 C155.271214,21.1160415 154.530712,20.1412026 153.04502,20.1412026 C152.316234,20.1412026 151.72805,20.408346 151.271094,20.944976 C150.818825,21.4816061 150.589175,22.114314 150.589175,22.8384131 L150.589175,29.3904553 L148.133331,29.3904553 L148.133331,21.5026964 C148.133331,20.5325442 148.102868,19.4803743 148.044284,18.3415001 L150.202521,18.3415001 L150.317345,20.0685584 L150.385303,20.0685584 C150.671193,19.5319283 151.097685,19.0890328 151.657749,18.735185 C152.323264,18.3227532 153.068453,18.1141939 153.883943,18.1141939 C154.915023,18.1141939 155.772694,18.4469514 156.454612,19.1148098 C157.30291,19.9326433 157.727058,21.1535353 157.727058,22.7751423 L157.727058,29.3927987 L157.727058,29.3927987 Z M164.499377,29.3927987 L162.045876,29.3927987 L162.045876,13.2774932 L164.499377,13.2774932 L164.499377,29.3927987 L164.499377,29.3927987 Z M178.957925,23.7781016 C178.957925,25.4770396 178.472849,26.868997 177.502696,27.961004 C176.485677,29.0834748 175.1359,29.6435385 173.455709,29.6435385 C171.831759,29.6435385 170.540566,29.1069084 169.579787,28.0289616 C168.619008,26.9533581 168.138619,25.5965511 168.138619,23.9608839 C168.138619,22.2502291 168.633068,20.8465548 169.626654,19.7568911 C170.62024,18.6672275 171.955957,18.121224 173.636148,18.121224 C175.260098,18.121224 176.560665,18.657854 177.549564,19.7334575 C178.486909,20.7785973 178.957925,22.1283742 178.957925,23.7781016 L178.957925,23.7781016 Z M176.408346,23.8577759 C176.408346,22.8384131 176.18807,21.9643388 175.749861,21.235553 C175.236665,20.3544486 174.500849,19.9138964 173.549443,19.9138964 C172.560544,19.9138964 171.810668,20.3544486 171.297472,21.235553 C170.85692,21.9643388 170.638987,22.8524733 170.638987,23.9022998 C170.638987,24.9216626 170.859263,25.7957369 171.297472,26.5245227 C171.829415,27.4056271 172.569918,27.8461793 173.52601,27.8461793 C174.463355,27.8461793 175.196827,27.398597 175.726427,26.5010891 C176.183383,25.7582431 176.408346,24.8771387 176.408346,23.8577759 L176.408346,23.8577759 Z M190.84346,29.3927987 L188.638356,29.3927987 L188.455574,28.1203527 L188.387616,28.1203527 C187.633053,29.1350288 186.55745,29.6435385 185.160806,29.6435385 C184.118009,29.6435385 183.274399,29.3084376 182.639347,28.6429226 C182.06288,28.038335 181.774647,27.2861156 181.774647,26.3932944 C181.774647,25.0435174 182.337054,24.0147812 183.468898,23.3023989 C184.598399,22.5900167 186.187199,22.2408556 188.232954,22.2572592 L188.232954,22.0510432 C188.232954,20.595815 187.469018,19.8693725 185.938802,19.8693725 C184.849139,19.8693725 183.88836,20.143546 183.058809,20.6872061 L182.559673,19.0749726 C183.586066,18.4399213 184.853825,18.121224 186.348891,18.121224 C189.235914,18.121224 190.684112,19.6444097 190.684112,22.6907813 L190.684112,26.758859 C190.684112,27.8625828 190.738009,28.7413438 190.84346,29.3927987 L190.84346,29.3927987 Z M188.293882,25.5965511 L188.293882,23.8929263 C185.584954,23.8460591 184.230491,24.5889051 184.230491,26.1191209 C184.230491,26.6955882 184.385153,27.1267669 184.701507,27.4150005 C185.017861,27.7032341 185.420919,27.8461793 185.901308,27.8461793 C186.440282,27.8461793 186.944105,27.6751138 187.403404,27.3353262 C187.865046,26.9931952 188.148593,26.5596731 188.254045,26.0277298 C188.279822,25.9082183 188.293882,25.7629298 188.293882,25.5965511 L188.293882,25.5965511 Z M204.798185,29.3927987 L202.618858,29.3927987 L202.504033,27.6188731 L202.436076,27.6188731 C201.740097,28.96865 200.554356,29.6435385 198.888225,29.6435385 C197.557195,29.6435385 196.448784,29.1209686 195.570023,28.0758288 C194.691262,27.030689 194.253053,25.673882 194.253053,24.0077511 C194.253053,22.2197654 194.728756,20.7715672 195.684848,19.6655 C196.610476,18.6344204 197.744664,18.1188806 199.094441,18.1188806 C200.577789,18.1188806 201.615899,18.6180169 202.206426,19.6186327 L202.253293,19.6186327 L202.253293,13.2774932 L204.711481,13.2774932 L204.711481,26.416728 C204.711481,27.4923315 204.739601,28.4835739 204.798185,29.3927987 L204.798185,29.3927987 Z M202.253293,24.7341936 L202.253293,22.8923105 C202.253293,22.5736131 202.22986,22.3158432 202.185336,22.1190008 C202.047078,21.5284734 201.74947,21.0316805 201.297201,20.6309654 C200.840246,20.2302504 200.289556,20.0287212 199.654504,20.0287212 C198.738249,20.0287212 198.02118,20.3919424 197.493924,21.1207282 C196.971354,21.8495141 196.706554,22.7798291 196.706554,23.91636 C196.706554,25.008367 196.957294,25.8941581 197.461117,26.5760767 C197.99306,27.3025191 198.710129,27.6657403 199.607637,27.6657403 C200.413754,27.6657403 201.058178,27.3634465 201.547941,26.7565156 C202.021301,26.1964519 202.253293,25.5215634 202.253293,24.7341936 L202.253293,24.7341936 Z M225.801746,23.7781016 C225.801746,25.4770396 225.316669,26.868997 224.346517,27.961004 C223.329498,29.0834748 221.984408,29.6435385 220.29953,29.6435385 C218.680266,29.6435385 217.389073,29.1069084 216.423608,28.0289616 C215.462829,26.9533581 214.98244,25.5965511 214.98244,23.9608839 C214.98244,22.2502291 215.476889,20.8465548 216.470475,19.7568911 C217.464061,18.6672275 218.799778,18.121224 220.484655,18.121224 C222.103919,18.121224 223.409172,18.657854 224.393385,19.7334575 C225.33073,20.7785973 225.801746,22.1283742 225.801746,23.7781016 L225.801746,23.7781016 Z M223.256854,23.8577759 C223.256854,22.8384131 223.036577,21.9643388 222.598369,21.235553 C222.080485,20.3544486 221.349356,19.9138964 220.393264,19.9138964 C219.409052,19.9138964 218.659176,20.3544486 218.141293,21.235553 C217.700741,21.9643388 217.482808,22.8524733 217.482808,23.9022998 C217.482808,24.9216626 217.703084,25.7957369 218.141293,26.5245227 C218.673236,27.4056271 219.413739,27.8461793 220.369831,27.8461793 C221.307176,27.8461793 222.045335,27.398597 222.574935,26.5010891 C223.027204,25.7582431 223.256854,24.8771387 223.256854,23.8577759 L223.256854,23.8577759 Z M239.006594,29.3927987 L236.553094,29.3927987 L236.553094,23.0657193 C236.553094,21.1160415 235.812591,20.1412026 234.324556,20.1412026 C233.59577,20.1412026 233.007586,20.408346 232.552974,20.944976 C232.098361,21.4816061 231.871055,22.114314 231.871055,22.8384131 L231.871055,29.3904553 L229.412867,29.3904553 L229.412867,21.5026964 C229.412867,20.5325442 229.384747,19.4803743 229.326163,18.3415001 L231.482057,18.3415001 L231.596882,20.0685584 L231.664839,20.0685584 C231.953073,19.5319283 232.379565,19.0890328 232.937285,18.735185 C233.605143,18.3227532 234.347989,18.1141939 235.165823,18.1141939 C236.194559,18.1141939 237.05223,18.4469514 237.734149,19.1148098 C238.584789,19.9326433 239.006594,21.1535353 239.006594,22.7751423 L239.006594,29.3927987 L239.006594,29.3927987 Z M255.534332,20.1857265 L252.830091,20.1857265 L252.830091,25.5520272 C252.830091,26.9158643 253.310481,27.5977828 254.261886,27.5977828 C254.702438,27.5977828 255.068003,27.560289 255.356236,27.482958 L255.419507,29.3459314 C254.934431,29.5287137 254.297036,29.6201049 253.51201,29.6201049 C252.541858,29.6201049 251.787295,29.3248411 251.241291,28.7343137 C250.692944,28.1437863 250.421114,27.1502005 250.421114,25.7558997 L250.421114,20.1857265 L248.806537,20.1857265 L248.806537,18.3461868 L250.421114,18.3461868 L250.421114,16.3215214 L252.827748,15.5950789 L252.827748,18.3438434 L255.531988,18.3438434 L255.531988,20.1857265 L255.534332,20.1857265 Z M268.535308,29.3927987 L266.077121,29.3927987 L266.077121,23.1125866 C266.077121,21.1324451 265.336618,20.1412026 263.853269,20.1412026 C262.714395,20.1412026 261.936399,20.7153265 261.509907,21.8635742 C261.437262,22.1049406 261.395082,22.4002043 261.395082,22.747022 L261.395082,29.3904553 L258.941581,29.3904553 L258.941581,13.2774932 L261.395082,13.2774932 L261.395082,19.9349867 L261.441949,19.9349867 C262.215259,18.7234682 263.323669,18.1188806 264.760151,18.1188806 C265.77717,18.1188806 266.618437,18.4516381 267.286296,19.1194965 C268.11819,19.9513902 268.535308,21.1886858 268.535308,22.8243529 L268.535308,29.3927987 L268.535308,29.3927987 Z M281.946373,23.3469228 C281.946373,23.787475 281.913566,24.1577263 281.854982,24.4600201 L274.489793,24.4600201 C274.5226,25.5520272 274.874104,26.3839209 275.556023,26.9603882 C276.179357,27.475928 276.983131,27.7336979 277.967343,27.7336979 C279.057007,27.7336979 280.050593,27.560289 280.945757,27.211128 L281.330069,28.917096 C280.282586,29.3717084 279.049977,29.5990146 277.622869,29.5990146 C275.912214,29.5990146 274.56478,29.0951916 273.589942,28.0875456 C272.610416,27.0798997 272.12534,25.7277794 272.12534,24.0311848 C272.12534,22.3650539 272.577609,20.9777831 273.489177,19.8717159 C274.440582,18.6906611 275.727088,18.1001337 277.351039,18.1001337 C278.939839,18.1001337 280.14667,18.6906611 280.962161,19.8717159 C281.620646,20.809061 281.946373,21.9690256 281.946373,23.3469228 L281.946373,23.3469228 Z M279.60301,22.7118715 C279.621757,21.9830857 279.460065,21.3550645 279.127308,20.8254645 C278.700816,20.143546 278.051704,19.801415 277.172943,19.801415 C276.371513,19.801415 275.717715,20.1341725 275.218579,20.8020309 C274.810834,21.3339743 274.569467,21.9690256 274.489793,22.7118715 L279.60301,22.7118715 L279.60301,22.7118715 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'BrandAppleAppStore';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];