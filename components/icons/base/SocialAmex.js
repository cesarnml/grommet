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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-amex', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-amex');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#002663', fillRule: 'evenodd', d: 'M2.16339299,10.1639888 L1.70168756,9.03892235 L1.24262093,10.1639888 L2.16339299,10.1639888 Z M12.3347024,9.71598817 C12.2420038,9.77225426 12.1323658,9.77412696 12.0010215,9.77412696 L11.1815454,9.77412696 L11.1815454,9.14728352 L12.0121725,9.14728352 C12.129727,9.14728352 12.2523888,9.15256113 12.3320636,9.19818689 C12.4195697,9.23930114 12.4737077,9.32680726 12.4737077,9.44768147 C12.4737077,9.57102424 12.4222085,9.67027729 12.3347024,9.71598817 L12.3347024,9.71598817 Z M18.180758,10.1639888 L17.7139452,9.03892235 L17.2496861,10.1639888 L18.180758,10.1639888 L18.180758,10.1639888 Z M7.28335213,11.381754 L6.59181545,11.381754 L6.58926177,9.17145836 L5.61111702,11.381754 L5.01883339,11.381754 L4.03813496,9.16950054 L4.03813496,11.381754 L2.66612756,11.381754 L2.40692899,10.7522717 L1.00240472,10.7522717 L0.740567343,11.381754 L0.00791640953,11.381754 L1.2158924,8.55959652 L2.21812688,8.55959652 L3.3654104,11.2315975 L3.3654104,8.55959652 L4.46638718,8.55959652 L5.34919453,10.4740908 L6.16015833,8.55959652 L7.28326701,8.55959652 L7.28326701,11.381754 L7.28335213,11.381754 Z M10.0395395,11.381754 L7.7860867,11.381754 L7.7860867,8.55959652 L10.0395395,8.55959652 L10.0395395,9.14728352 L8.46068396,9.14728352 L8.46068396,9.65597668 L10.0016599,9.65597668 L10.0016599,10.2344704 L8.46068396,10.2344704 L8.46068396,10.7980677 L10.0395395,10.7980677 L10.0395395,11.381754 L10.0395395,11.381754 Z M13.2168288,9.31965696 C13.2168288,9.76961546 12.9165159,10.0020855 12.7415037,10.0718861 C12.8891064,10.1280671 13.0151731,10.2273201 13.0751846,10.3095486 C13.1704369,10.4499159 13.1868656,10.5753017 13.1868656,10.8273499 L13.1868656,11.381754 L12.50648,11.381754 L12.5039263,11.025856 C12.5039263,10.8560363 12.5201847,10.6118193 12.3974378,10.4760486 C12.2988657,10.3767956 12.1486242,10.3552595 11.9057692,10.3552595 L11.1816305,10.3552595 L11.1816305,11.381754 L10.5071184,11.381754 L10.5071184,8.55959652 L12.0586495,8.55959652 C12.4033964,8.55959652 12.6574025,8.56870465 12.8754868,8.69477134 C13.0888894,8.82083803 13.2168288,9.00487327 13.2168288,9.31965696 L13.2168288,9.31965696 Z M14.2963546,11.381754 L13.6080526,11.381754 L13.6080526,8.55959652 L14.2963546,8.55959652 L14.2963546,11.381754 L14.2963546,11.381754 Z M22.2815433,11.381754 L21.3256155,11.381754 L20.0469877,9.26356111 L20.0469877,11.381754 L18.6731927,11.381754 L18.4106744,10.7522717 L17.0093848,10.7522717 L16.7546977,11.381754 L15.9653551,11.381754 C15.6374625,11.381754 15.2223192,11.3092294 14.9872103,11.0696091 C14.7501436,10.8299887 14.6268009,10.5054159 14.6268009,9.99221127 C14.6268009,9.57366304 14.7005171,9.19103658 14.990445,8.88868081 C15.2085293,8.66344619 15.5500415,8.55959652 16.0148965,8.55959652 L16.6679577,8.55959652 L16.6679577,9.16430806 L16.0286012,9.16430806 C15.7824264,9.16430806 15.6434211,9.20091081 15.5095231,9.33148901 C15.3945224,9.45032027 15.3156136,9.67495903 15.3156136,9.97076036 C15.3156136,10.2731161 15.3757102,10.4911153 15.501096,10.6335256 C15.6049456,10.7452065 15.7936626,10.7790854 15.9712285,10.7790854 L16.2741802,10.7790854 L17.2249154,8.55968164 L18.2356621,8.55968164 L19.3777532,11.2290439 L19.3777532,8.55968164 L20.4048435,8.55968164 L21.5906025,10.5251644 L21.5906025,8.55968164 L22.2815433,8.55968164 L22.2815433,11.381754 L22.2815433,11.381754 Z M8.51226831e-05,11.9360729 L1.15264625,11.9360729 L1.4125258,11.3092294 L1.99433934,11.3092294 L2.25353791,11.9360729 L4.52129131,11.9360729 L4.52129131,11.4568322 L4.72371305,11.9381158 L5.90095976,11.9381158 L6.1033815,11.4496819 L6.1033815,11.9360729 L11.7391841,11.9360729 L11.7365453,10.9071099 L11.8455875,10.9071099 C11.9219425,10.9097487 11.9442446,10.9168139 11.9442446,11.0428806 L11.9442446,11.9360729 L14.8591007,11.9360729 L14.8591007,11.6965376 C15.0942095,11.8225192 15.4598966,11.9360729 15.9410951,11.9360729 L17.1673725,11.9360729 L17.4298057,11.3092294 L18.0116192,11.3092294 L18.2682641,11.9360729 L20.6313549,11.9360729 L20.6313549,11.3406397 L20.9892107,11.9360729 L22.8828499,11.9360729 L22.8828499,8 L21.0087889,8 L21.0087889,8.46485497 L20.7463557,8 L18.8233492,8 L18.8233492,8.46485497 L18.5823668,8 L15.9848482,8 C15.5500415,8 15.1678407,8.06069247 14.8591007,8.22983124 L14.8591007,8 L13.0665872,8 L13.0665872,8.22983124 C12.8701241,8.05549999 12.6024132,8 12.3047392,8 L5.75599583,8 L5.31659254,9.0166202 L4.8653572,8 L2.80266434,8 L2.80266434,8.46485497 L2.57606776,8 L0.816922389,8 L0,9.87142219 L0,11.9360729 L8.51226831e-05,11.9360729 Z M24,14.0177481 L22.7705731,14.0177481 C22.6478262,14.0177481 22.5662786,14.0223447 22.4975846,14.0687366 C22.4264221,14.1144474 22.3990126,14.1822902 22.3990126,14.2718393 C22.3990126,14.3783278 22.4591092,14.4507672 22.5465302,14.4820923 C22.6176927,14.506863 22.6941329,14.5140984 22.8064949,14.5140984 L23.1720968,14.5238876 C23.5410185,14.5329957 23.7872784,14.5964121 23.9374348,14.75108 C23.9647592,14.772616 23.9811879,14.7967909 24,14.8209657 L24,14.0177481 Z M24,15.8787853 C23.8361388,16.1184057 23.5168437,16.2398757 23.0845907,16.2398757 L21.7818731,16.2398757 L21.7818731,15.6345683 L23.0793131,15.6345683 C23.2080186,15.6345683 23.2980784,15.6176289 23.3523015,15.5646826 C23.3992892,15.5210147 23.4320615,15.4575983 23.4320615,15.3805622 C23.4320615,15.2983337 23.3992892,15.2330446 23.3496627,15.1938882 C23.3007172,15.1508161 23.2294695,15.1312379 23.1120002,15.1312379 C22.4786023,15.1097019 21.6884084,15.1508161 21.6884084,14.2575387 C21.6884084,13.8480986 21.9483731,13.4171224 22.6562533,13.4171224 L23.9999149,13.4171224 L23.9999149,12.855483 L22.7515056,12.855483 C22.3747526,12.855483 22.1010832,12.945713 21.9072588,13.0859952 L21.9072588,12.855483 L20.0606925,12.855483 C19.7654019,12.855483 19.4187823,12.9286885 19.254836,13.0859952 L19.254836,12.855483 L15.9573535,12.855483 L15.9573535,13.0859952 C15.6949203,12.8966823 15.2521121,12.855483 15.0477325,12.855483 L12.8726777,12.855483 L12.8726777,13.0859952 C12.6650635,12.8849354 12.2033581,12.855483 11.9219425,12.855483 L9.48768913,12.855483 L8.93064629,13.4583218 L8.40892937,12.855483 L4.77265859,12.855483 L4.77265859,16.7942798 L8.34049073,16.7942798 L8.91447298,16.1819072 L9.45517227,16.7942798 L11.6544019,16.7962376 L11.6544019,15.8696772 L11.8706135,15.8696772 C12.1624141,15.8741887 12.5065651,15.8624417 12.8101977,15.7311826 L12.8101977,16.7941946 L14.6241621,16.7941946 L14.6241621,15.7676151 L14.7116682,15.7676151 C14.8233492,15.7676151 14.83433,15.7722117 14.83433,15.8838075 L14.83433,16.7941095 L20.344832,16.7941095 C20.6946862,16.7941095 21.0603733,16.7045604 21.2628801,16.5420612 L21.2628801,16.7941095 L23.0107893,16.7941095 C23.3745185,16.7941095 23.7297355,16.743121 24,16.6125428 L24,15.8787853 L24,15.8787853 Z M21.3091869,14.75108 C21.4405312,14.8870209 21.5109276,15.0586282 21.5109276,15.349152 C21.5109276,15.9564172 21.1315358,16.2398757 20.4512353,16.2398757 L19.1373667,16.2398757 L19.1373667,15.6345683 L20.4459577,15.6345683 C20.5738971,15.6345683 20.6646379,15.6176289 20.7214999,15.5646826 C20.7678917,15.5210147 20.8011747,15.4575983 20.8011747,15.3805622 C20.8011747,15.2983337 20.7651678,15.2330446 20.7188611,15.1938882 C20.6672767,15.1508161 20.5961141,15.1312379 20.4786448,15.1312379 C19.8478006,15.1097019 19.057777,15.1508161 19.057777,14.2575387 C19.057777,13.8480986 19.3150178,13.4171224 20.022217,13.4171224 L21.3745611,13.4171224 L21.3745611,14.0179183 L20.1371326,14.0179183 C20.0144709,14.0179183 19.9347109,14.0225149 19.8668681,14.0689068 C19.7929816,14.1146177 19.7655721,14.1824605 19.7655721,14.2720095 C19.7655721,14.378498 19.8283075,14.4509374 19.9131749,14.4822626 C19.9843374,14.5070333 20.0607776,14.5142687 20.1756932,14.5142687 L20.5388266,14.5240578 C20.9050244,14.5329957 21.1563916,14.596327 21.3091869,14.75108 L21.3091869,14.75108 Z M15.222234,14.5767487 C15.132004,14.6302909 15.0204082,14.6348875 14.889149,14.6348875 L14.0696729,14.6348875 L14.0696729,14.0008938 L14.9003001,14.0008938 C15.0204082,14.0008938 15.1406014,14.0034475 15.222234,14.0518823 C15.309655,14.0975932 15.3619204,14.1850142 15.3619204,14.3058032 C15.3619204,14.4265923 15.309655,14.5238876 15.222234,14.5767487 L15.222234,14.5767487 Z M15.6296312,14.9280501 C15.7797876,14.9834649 15.9025345,15.0828031 15.9600775,15.1650316 C16.0553297,15.3028452 16.0691196,15.4314656 16.0718435,15.6802792 L16.0718435,16.2398757 L15.3946075,16.2398757 L15.3946075,15.8867017 C15.3946075,15.716882 15.410951,15.4654296 15.2855653,15.3341704 C15.1869933,15.2330446 15.0367517,15.2088698 14.790662,15.2088698 L14.069758,15.2088698 L14.069758,16.2398757 L13.3919261,16.2398757 L13.3919261,13.4170373 L14.9493307,13.4170373 C15.2908429,13.4170373 15.5395714,13.432104 15.7609755,13.5502543 C15.9738673,13.6788747 16.1077653,13.8550786 16.1077653,14.1770977 C16.1076802,14.6276521 15.8071971,14.8575685 15.6296312,14.9280501 L15.6296312,14.9280501 Z M16.4817944,13.4170373 L18.7332042,13.4170373 L18.7332042,14.0008087 L17.1535826,14.0008087 L17.1535826,14.5140133 L18.6946437,14.5140133 L18.6946437,15.0899534 L17.1535826,15.0899534 L17.1535826,15.6515929 L18.7332042,15.6541465 L18.7332042,16.2398757 L16.4817944,16.2398757 L16.4817944,13.4170373 L16.4817944,13.4170373 Z M11.9305399,14.7197548 L11.0587985,14.7197548 L11.0587985,14.0008938 L11.9383712,14.0008938 C12.1819072,14.0008938 12.3509608,14.1001468 12.3509608,14.3470026 C12.3509608,14.5911345 12.1897385,14.7197548 11.9305399,14.7197548 L11.9305399,14.7197548 Z M10.3869252,15.9831457 L9.35123747,14.8333085 L10.3869252,13.7199889 L10.3869252,15.9831457 L10.3869252,15.9831457 Z M7.71228533,15.6515929 L6.05375497,15.6515929 L6.05375497,15.0899534 L7.53471941,15.0899534 L7.53471941,14.5140133 L6.05375497,14.5140133 L6.05375497,14.0008087 L7.74497244,14.0008087 L8.48281586,14.8234343 L7.71228533,15.6515929 L7.71228533,15.6515929 Z M13.0751846,14.3470026 C13.0751846,15.1311528 12.4901364,15.2930561 11.9004916,15.2930561 L11.0587985,15.2930561 L11.0587985,16.2398757 L9.74765381,16.2398757 L8.91702666,15.3053989 L8.05379754,16.2398757 L5.38179651,16.2398757 L5.38179651,13.4170373 L8.09491179,13.4170373 L8.92485795,14.3423209 L9.7828946,13.4170373 L11.9383712,13.4170373 C12.4737077,13.4170373 13.0751846,13.5652359 13.0751846,14.3470026 L13.0751846,14.3470026 Z', stroke: 'none' })
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

Icon.displayName = 'SocialAmex';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];