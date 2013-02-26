module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ["<%= pkg.version %>", "_temp"],
		copy: {
			staticAssets: {
				src: ['flash/**', 'fonts/**', 'images/**', 'favicon.ico'],
				dest: '<%= pkg.version %>/',
				cwd: "v.X.X.X/",
				expand: true
			},
			dev_js: {
				files: [
					{src: ['js-dev/*'],	dest: '<%= pkg.version %>/js/', cwd: "v.X.X.X/", expand: true, flatten: true},
					{src: ['js-dev/ux-script/*'],	dest: '<%= pkg.version %>/js/ux-script/', cwd: "v.X.X.X/",	expand: true, flatten: true},
					{src: ['**'],	dest: '<%= pkg.version %>/js/ckeditor/', cwd: "v.X.X.X/js-dev/ckeditor/",	expand: true}
				]
			},
			prod_js: {
				files: [
					{src: ['js-dev/*'],	dest: '<%= pkg.version %>/js/', cwd: "v.X.X.X/", expand: true, flatten: true, filter: 'isFile'},
					{src: ['**'],	dest: '<%= pkg.version %>/js/ckeditor/', cwd: "v.X.X.X/js-dev/ckeditor/",	expand: true}
				]
			},
			pub_copys: {
				files: [
					{src: ['**'],	dest: '<%= pkg.version %>/js/ckeditor/', cwd: "v.X.X.X/js-dev/ckeditor/",	expand: true},
					{src: ['js-dev/video-js.swf'],	dest: '<%= pkg.version %>/js/', cwd: "v.X.X.X/", expand: true, flatten: true, filter: 'isFile'},
				]
			}
		},
		concat: {
			prod_ux_script: {
				files: [
					{
						src: [
							'v.X.X.X/js-dev/ux-script/browserDetect.js',
							'v.X.X.X/js-dev/ux-script/lazyloader.js',
							'v.X.X.X/js-dev/ux-script/jquery.js',
							'v.X.X.X/js-dev/ux-script/ux-object.js',
							'v.X.X.X/js-dev/ux-script/dev-only-script.js'
						],	
						dest: '<%= pkg.version %>/js/ux-script.js'
					},
				]
			},
		},
		uglify: {
		    options: {
				mangle: false
			},
			pub_ux_script:{
				files: [
					{
						'<%= pkg.version %>/js/ux-script.min.js': ['v.X.X.X/js-dev/ux-script/browserDetect.js','v.X.X.X/js-dev/ux-script/lazyloader.js','v.X.X.X/js-dev/ux-script/jquery.js','v.X.X.X/js-dev/ux-script/ux-object.js','v.X.X.X/js-dev/ux-script/default.js'],
					}
				]
			},
			pub_js:{
				files: {
					'<%= pkg.version %>/js/jsf.min.js': 'v.X.X.X/js-dev/jsf.js',
					'<%= pkg.version %>/js/lazy-jquery.chosen.min.js': 'v.X.X.X/js-dev/lazy-jquery.chosen.js',
					'<%= pkg.version %>/js/lazy-jquery.cookie.min.js': 'v.X.X.X/js-dev/lazy-jquery.cookie.js',
					'<%= pkg.version %>/js/lazy-jquery.dataTables.min.js': 'v.X.X.X/js-dev/lazy-jquery.dataTables.js',
					'<%= pkg.version %>/js/lazy-jquery.dynatree.min.js': 'v.X.X.X/js-dev/lazy-jquery.dynatree.js',
					'<%= pkg.version %>/js/lazy-jquery.expander.min.js': 'v.X.X.X/js-dev/lazy-jquery.expander.js',
					'<%= pkg.version %>/js/lazy-jquery.fullcalendar.min.js': 'v.X.X.X/js-dev/lazy-jquery.fullcalendar.js',
					'<%= pkg.version %>/js/lazy-jquery.joyride.min.js': 'v.X.X.X/js-dev/lazy-jquery.joyride.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.app-menus.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.app-menus.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.character-counter.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.character-counter.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.keyboard-shortcuts.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.keyboard-shortcuts.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.menus.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.menus.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.modal-loader.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.modal-loader.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.navigational-warning.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.navigational-warning.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.notifications.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.notifications.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.popovers.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.popovers.js',
					'<%= pkg.version %>/js/lazy-jquery.open-ux.show-hide-password.min.js': 'v.X.X.X/js-dev/lazy-jquery.open-ux.show-hide-password.js',
					'<%= pkg.version %>/js/lazy-jquery.qtip.min.js': 'v.X.X.X/js-dev/lazy-jquery.qtip.js',
					'<%= pkg.version %>/js/lazy-jquery.validationEngine.min.js': 'v.X.X.X/js-dev/lazy-jquery.validationEngine.js',
					'<%= pkg.version %>/js/lazy-jquery.validationEngine-en.min.js': 'v.X.X.X/js-dev/lazy-jquery.validationEngine-en.js',
					'<%= pkg.version %>/js/lazy-jquery-page-feedback.min.js': 'v.X.X.X/js-dev/lazy-jquery-page-feedback.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-accordion.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-accordion.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-autocomplete.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-autocomplete.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-button.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-button.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-core.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-core.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-datepicker.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-datepicker.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-dialog.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-dialog.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-progressbar.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-progressbar.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-slider.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-slider.js',
					'<%= pkg.version %>/js/lazy-jquery-ui-tabs.min.js': 'v.X.X.X/js-dev/lazy-jquery-ui-tabs.js',
					'<%= pkg.version %>/js/lazy-json2.min.js': 'v.X.X.X/js-dev/lazy-json2.js',
					'<%= pkg.version %>/js/lazy-sugar.min.js': 'v.X.X.X/js-dev/lazy-sugar.js',
					'<%= pkg.version %>/js/lazy-swfobject.min.js': 'v.X.X.X/js-dev/lazy-swfobject.js',
					'<%= pkg.version %>/js/lazy-video.min.js': 'v.X.X.X/js-dev/lazy-video.js',
					'<%= pkg.version %>/js/modernizr.min.js': 'v.X.X.X/js-dev/modernizr.js'
				}
			},
		},
		sass: {

			dev_ux_style: {
				files: {
					'<%= pkg.version %>/css/ux-defaults.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-defaults.scss'
					],
					'<%= pkg.version %>/css/ux-grid-system.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-grid-system.scss'
					],
					'<%= pkg.version %>/css/ux-structure.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-structure.scss'
					],
					'<%= pkg.version %>/css/ux-page-contents.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-page-contents.scss'
					],
					'<%= pkg.version %>/css/ux-tables.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-tables.scss'
					],
					'<%= pkg.version %>/css/ux-utility.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-utility.scss'
					],
					'<%= pkg.version %>/css/ux-media-queries.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-media-queries.scss'
					]
				}
			},
			dev_ux_print: {
				files: {
					'<%= pkg.version %>/css/ux-print.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-print.scss'
					]
				}
			},
			dev_styles: {
				files: {
					'<%= pkg.version %>/css/lazy-ckeditor-override.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-ckeditor-override.scss'
					],
					'<%= pkg.version %>/css/lazy-dynatree.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-dynatree.scss'
					],
					'<%= pkg.version %>/css/lazy-fullcalendar.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-fullcalendar.scss',
						'v.X.X.X/css-dev/lazy-fullcalendar-overrides.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.chosen.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.chosen.scss',
						'v.X.X.X/css-dev/lazy-jquery.chosen-overrides.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.joyride.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.joyride.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.app-menus.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.app-menus.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.form-enhancements.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.form-enhancements.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.character-counter-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.character-counter-overrides.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.keyboard-shortcuts.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.keyboard-shortcuts.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.navigational-warning.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.navigational-warning.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.notifications.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.notifications.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.open-ux.popovers.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.popovers.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.validationEngine.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.validationEngine.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery.validationEngine-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.validationEngine-overrides.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-overrides.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery-page-feedback.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-page-feedback.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery-qtip.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-qtip.scss'
					],
					'<%= pkg.version %>/css/lazy-jquery-ui.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-ui.scss'
					],
					'<%= pkg.version %>/css/lazy-video-js.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-video-js.scss'
					],
				}
			},
			pub_styles: {
				files: {
					'_temp/css/lazy-ckeditor-override.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-ckeditor-override.scss'
					],
					'_temp/css/lazy-dynatree.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-dynatree.scss'
					],
					'_temp/css/lazy-fullcalendar.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-fullcalendar.scss',
						'v.X.X.X/css-dev/lazy-fullcalendar-overrides.scss'
					],
					'_temp/css/lazy-jquery.chosen.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.chosen.scss',
						'v.X.X.X/css-dev/lazy-jquery.chosen-overrides.scss'
					],
					'_temp/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'_temp/css/lazy-jquery.joyride.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.joyride.scss'
					],
					'_temp/css/lazy-jquery.open-ux.app-menus.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.app-menus.scss'
					],
					'_temp/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'_temp/css/lazy-jquery.open-ux.form-enhancements.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.form-enhancements.scss'
					],
					'_temp/css/lazy-jquery.open-ux.character-counter-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.character-counter-overrides.scss'
					],
					'_temp/css/lazy-jquery.open-ux.keyboard-shortcuts.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.keyboard-shortcuts.scss'
					],
					'_temp/css/lazy-jquery.open-ux.navigational-warning.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.navigational-warning.scss'
					],
					'_temp/css/lazy-jquery.open-ux.notifications.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.notifications.scss'
					],
					'_temp/css/lazy-jquery.expander.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.expander.scss'
					],
					'_temp/css/lazy-jquery.open-ux.popovers.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.open-ux.popovers.scss'
					],
					'_temp/css/lazy-jquery.validationEngine.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.validationEngine.scss'
					],
					'_temp/css/lazy-jquery.validationEngine-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery.validationEngine-overrides.scss'
					],
					'_temp/css/lazy-jquery-overrides.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-overrides.scss'
					],
					'_temp/css/lazy-jquery-page-feedback.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-page-feedback.scss'
					],
					'_temp/css/lazy-jquery-qtip.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-qtip.scss'
					],
					'_temp/css/lazy-jquery-ui.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-jquery-ui.scss'
					],
					'_temp/css/lazy-video-js.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/lazy-video-js.scss'
					],
				}
			},
			prod_ux_style: {
				files: {
					'<%= pkg.version %>/css/ux-style.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-defaults.scss',
						'v.X.X.X/css-dev/ux-style/ux-grid-system.scss',
						'v.X.X.X/css-dev/ux-style/ux-structure.scss',
						'v.X.X.X/css-dev/ux-style/ux-page-contents.scss',
						'v.X.X.X/css-dev/ux-style/ux-tables.scss',
						'v.X.X.X/css-dev/ux-style/ux-utility.scss',
						'v.X.X.X/css-dev/ux-style/ux-media-queries.scss'
					]
				}
			},
			pub_ux_style: {
				files: {
					'_temp/css/ux-style.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-defaults.scss',
						'v.X.X.X/css-dev/ux-style/ux-grid-system.scss',
						'v.X.X.X/css-dev/ux-style/ux-structure.scss',
						'v.X.X.X/css-dev/ux-style/ux-page-contents.scss',
						'v.X.X.X/css-dev/ux-style/ux-tables.scss',
						'v.X.X.X/css-dev/ux-style/ux-utility.scss',
						'v.X.X.X/css-dev/ux-style/ux-media-queries.scss'
					]
				}
			},
			pub_ux_print: {
				files: {
					'_temp/css/ux-style/ux-print.css': [
						'v.X.X.X/css-dev/ux-style/global.scss',
						'v.X.X.X/css-dev/ux-style/ux-print.scss'
					]
				}
			},
		},
		cssmin: {
			pub_ux_style_min: {
				files: {
					"<%= pkg.version %>/css/ux-style.min.css": ['_temp/css/ux-style.css']
				}
			},
			pub_ux_print: {
				files: {
					'<%= pkg.version %>/css/ux-print.min.css': '_temp/css/ux-style/ux-print.css'
				}
			},
			pub_styles: {
				files: {
					'<%= pkg.version %>/css/lazy-ckeditor-override.min.css': '_temp/css/lazy-ckeditor-override.css',
					'<%= pkg.version %>/css/lazy-dynatree.min.css': '_temp/css/lazy-dynatree.css',
					'<%= pkg.version %>/css/lazy-fullcalendar.min.css': '_temp/css/lazy-fullcalendar.css',
					'<%= pkg.version %>/css/lazy-jquery.chosen.min.css': '_temp/css/lazy-jquery.chosen.css',
					'<%= pkg.version %>/css/lazy-jquery.expander.min.css': '_temp/css/lazy-jquery.expander.css',
					'<%= pkg.version %>/css/lazy-jquery.joyride.min.css': '_temp/css/lazy-jquery.joyride.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.app-menus.min.css': '_temp/css/lazy-jquery.open-ux.app-menus.css',
					'<%= pkg.version %>/css/lazy-jquery.expander.min.css': '_temp/css/lazy-jquery.expander.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.form-enhancements.min.css': '_temp/css/lazy-jquery.open-ux.form-enhancements.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.character-counter-overrides.min.css': '_temp/css/lazy-jquery.open-ux.character-counter-overrides.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.keyboard-shortcuts.min.css': '_temp/css/lazy-jquery.open-ux.keyboard-shortcuts.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.navigational-warning.min.css': '_temp/css/lazy-jquery.open-ux.navigational-warning.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.notifications.min.css': '_temp/css/lazy-jquery.open-ux.notifications.css',
					'<%= pkg.version %>/css/lazy-jquery.expander.min.css': '_temp/css/lazy-jquery.expander.css',
					'<%= pkg.version %>/css/lazy-jquery.open-ux.popovers.min.css': '_temp/css/lazy-jquery.open-ux.popovers.css',
					'<%= pkg.version %>/css/lazy-jquery.validationEngine.min.css': '_temp/css/lazy-jquery.validationEngine.css',
					'<%= pkg.version %>/css/lazy-jquery.validationEngine-overrides.min.css': '_temp/css/lazy-jquery.validationEngine-overrides.css',
					'<%= pkg.version %>/css/lazy-jquery-overrides.min.css': '_temp/css/lazy-jquery-overrides.css',
					'<%= pkg.version %>/css/lazy-jquery-page-feedback.min.css': '_temp/css/lazy-jquery-page-feedback.css',
					'<%= pkg.version %>/css/lazy-jquery-qtip.min.css': '_temp/css/lazy-jquery-qtip.css',
					'<%= pkg.version %>/css/lazy-jquery-ui.min.css': '_temp/css/lazy-jquery-ui.css',
					'<%= pkg.version %>/css/lazy-video-js.min.css': '_temp/css/lazy-video-js.css'
				}
			}
		},
		zip: {
			pub_zip:{
				src: ['<%= pkg.version %>/**'],
				dest: '<%= pkg.version %>.zip'
			}
		},
		index: {
			src: 'index.tmpl',
			dest: 'index.html',
			title: 'UX Template',
			assetSuffix: '',
			cssBundle: [],
			cssPBundle: [],
			jsBundle: []
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-zipstream');

	// Load custom plugins
	grunt.loadTasks('custom_modules');

	// Default task(s).
	grunt.registerTask('default', function(){

		var target = grunt.option('target') || 'dev',
			tasks = [];

		// Switch case to change out the tasks that should be ran
		switch (target) {
			case "dev":
				tasks = [
					'clean',
					'copy:staticAssets',
					'copy:dev_js',
					'sass:dev_ux_style',
					'sass:dev_styles',
					'sass:dev_ux_print',
					'index'
				];

				var cssBundle = [
					'<%= pkg.version %>/css/ux-defaults.css',
					'<%= pkg.version %>/css/ux-grid-system.css',
					'<%= pkg.version %>/css/ux-structure.css',
					'<%= pkg.version %>/css/ux-page-contents.css',
					'<%= pkg.version %>/css/ux-tables.css',
					'<%= pkg.version %>/css/ux-utility.css',
					'<%= pkg.version %>/css/ux-media-queries.css'
				];

				var cssPBundle = [
					'<%= pkg.version %>/css/ux-print.css',
				];

				var jsBundle = [
					'<%= pkg.version %>/js/ux-script/browserDetect.js',
					'<%= pkg.version %>/js/ux-script/lazyloader.js',
					'<%= pkg.version %>/js/ux-script/jquery.js',
					'<%= pkg.version %>/js/ux-script/ux-object.js',
					'<%= pkg.version %>/js/ux-script/dev-only-script.js'
				];

				// Add them to the config
				grunt.config('index.cssBundle', cssBundle);
				grunt.config('index.cssPBundle', cssPBundle);
				grunt.config('index.jsBundle', jsBundle);
				grunt.config('index.title', "UX Development Template");

				break;

			case "prod":
				tasks = [
					'clean',
					'copy:staticAssets',
					'copy:prod_js',
					'concat:prod_ux_script',
					'sass:prod_ux_style',
					'sass:dev_styles',
					'sass:dev_ux_print',
					'index'
				];

				var cssBundle = [
					'<%= pkg.version %>/css/ux-style.css',
				];

				var cssPBundle = [
					'<%= pkg.version %>/css/ux-print.css',
				];

				var jsBundle = [
					'<%= pkg.version %>/js/ux-script.js',
				];

				// Add them to the config
				grunt.config('index.cssBundle', cssBundle);
				grunt.config('index.cssPBundle', cssPBundle);
				grunt.config('index.jsBundle', jsBundle);
				grunt.config('index.title', "UX Production Template");

				break;

			case "pub":
				tasks = [
					'clean',
					'copy:staticAssets',
					'copy:pub_copys',
					'uglify:pub_ux_script',
					'uglify:pub_js',
					'sass:pub_ux_style',
					'cssmin:pub_ux_style_min',
					'sass:pub_styles',
					'cssmin:pub_styles',
					'sass:pub_ux_print',
					'cssmin:pub_ux_print',
					'zip:pub_zip',
					'index'
				];

				var cssBundle = [
					'<%= pkg.version %>/css/ux-style.min.css',
				];

				var cssPBundle = [
					'<%= pkg.version %>/css/ux-print.min.css',
				];

				var jsBundle = [
					'<%= pkg.version %>/js/ux-script.min.js',
				];

				// Add them to the config
				grunt.config('index.cssBundle', cssBundle);
				grunt.config('index.cssPBundle', cssPBundle);
				grunt.config('index.jsBundle', jsBundle);
				grunt.config('index.assetSuffix', '.min');
				grunt.config('index.title', "UX Published Template");

				break;
		}

		grunt.task.run(tasks);

	});

};