Package.describe({
    name: "maka:comt-packages",
    summary: "This is a simple wrapper for all the packages used by comt-ui.",
    version: "0.0.5",
    git: "https://github.com/<username>/rps-comt-packages.git",
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.1');

    var packages = [
        'mdg:validation-error@0.5.1',
        'iron:dynamic-template@1.0.12',
        'aldeed:collection2@2.9.0',
        'aldeed:autoform@5.8.1',
        'aldeed:autoform-bs-datetimepicker@1.0.6',
        'cfs:standard-packages@0.5.9',
        'cfs:gridfs@0.0.33',
        'cfs:autoform@2.2.1',
        'zimme:active-route@2.3.2',
        'zimme:iron-router-active@2.0.1',
        'minimongo',
        'mongo-livedata',
        'templating',
        'momentjs:moment@2.12.0',
        'less@2.5.1',
        'reactive-dict@1.1.3',
        'reactive-var@1.0.6',
        'reload@1.1.4',
        'twbs:bootstrap@3.3.6',
        'okgrow:router-autoscroll@0.1.7',
        'logging@1.0.8',
        'ejson@1.0.7',
        'random@1.0.5',
        'accounts-password@1.1.4',
        'ian:accounts-ui-bootstrap-3@1.1.4',
        'alanning:roles@1.2.14',
        'sacha:spin@2.3.1',
        'check@1.1.0',
        'email@1.0.8',
    ];

    api.use(packages);
    api.imply(packages);

	// api.addFiles('client/lib/animate-js/animate.min.css', 'client')
	// api.addFiles('client/lib/animo-js/animo.js', 'client')
	// api.addFiles('client/lib/bootstrap-filestyle/src/bootstrap-filestyle.js', 'client')
	// api.addFiles('client/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client')
	// api.addFiles('client/lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client')
	// api.addFiles('client/lib/bootstrap-tour/build/css/bootstrap-tour-standalone.css', 'client')
	// api.addFiles('client/lib/bootstrap-tour/build/css/bootstrap-tour-standalone.min.css', 'client')
	// api.addFiles('client/lib/bootstrap-tour/build/js/bootstrap-tour-standalone.js', 'client')
	// api.addFiles('client/lib/bootstrap-tour/build/js/bootstrap-tour-standalone.min.js', 'client')
	// api.addFiles('client/lib/bootstrap-wysiwyg/bootstrap-wysiwyg.js', 'client')
	// api.addFiles('client/lib/bootstrap-wysiwyg/external/jquery.hotkeys.js', 'client')
	// api.addFiles('client/lib/chart-js/Chart.js', 'client')
	// api.addFiles('client/lib/chartist/dist/chartist.js', 'client')
	// api.addFiles('client/lib/chartist/dist/chartist.min.css', 'client')
	// api.addAssets('client/lib/chosen-js/chosen-sprite.png', 'client')
	// api.addAssets('client/lib/chosen-js/chosen-sprite@2x.png', 'client')
	// api.addFiles('client/lib/chosen-js/chosen.jquery.min.js', 'client')
	// api.addFiles('client/lib/chosen-js/chosen.min.css', 'client')
	// api.addFiles('client/lib/cropper/dist/cropper.css', 'client')
	// api.addFiles('client/lib/cropper/dist/cropper.js', 'client')
	// api.addFiles('client/lib/d3/d3.min.js', 'client')
	// api.addFiles('client/lib/datatables/media/css/dataTables.bootstrap.css', 'client')
	// api.addAssets('client/lib/datatables/media/images/favicon.ico', 'client')
	// api.addAssets('client/lib/datatables/media/images/sort_asc.png', 'client')
	// api.addAssets('client/lib/datatables/media/images/sort_asc_disabled.png', 'client')
	// api.addAssets('client/lib/datatables/media/images/sort_both.png', 'client')
	// api.addAssets('client/lib/datatables/media/images/sort_desc.png', 'client')
	// api.addAssets('client/lib/datatables/media/images/sort_desc_disabled.png', 'client')
	// api.addAssets('client/lib/datatables/media/images/Sorting icons.psd', 'client')
	// api.addFiles('client/lib/datatables/media/js/1_jquery.dataTables.min.js', 'client')
	// api.addFiles('client/lib/datatables/media/js/dataTables.bootstrap.js', 'client')
	// api.addFiles('client/lib/datatables-colvis/css/dataTables.colVis.css', 'client')
	// api.addFiles('client/lib/datatables-colvis/js/dataTables.colVis.js', 'client')
	// api.addFiles('client/lib/dataTables-fontAwesome/index.css', 'client')
	// api.addFiles('client/lib/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'client')
	// api.addFiles('client/lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', 'client')
	// api.addFiles('client/lib/fastclick/lib/fastclick.js', 'client')
	// api.addFiles('client/lib/flatdoc/flatdoc.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.kategories.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.pie.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.resize.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.spline.min.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.time.js', 'client')
	// api.addFiles('client/lib/flot/jquery.flot.tooltip.min.js', 'client')
	// api.addFiles('client/lib/fontawesome/css/font-awesome.min.css', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/fontawesome-webfont.eot', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/fontawesome-webfont.svg', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/fontawesome-webfont.ttf', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/fontawesome-webfont.woff', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/fontawesome-webfont.woff2', 'client')
	// api.addAssets('client/lib/fontawesome/fonts/FontAwesome.otf', 'client')
	// api.addFiles('client/lib/fullcalendar/dist/fullcalendar.css', 'client')
	// api.addFiles('client/lib/fullcalendar/dist/fullcalendar.min.js', 'client')
	// api.addFiles('client/lib/fullcalendar/dist/gcal.js', 'client')
	// api.addFiles('client/lib/html-sortable/dist/html.sortable.js', 'client')
	// api.addFiles('client/lib/ika-jvectormap/jquery-jvectormap-1.2.2.css', 'client')
	// api.addFiles('client/lib/ika-jvectormap/jquery-jvectormap-1.2.2.min.js', 'client')
	// api.addFiles('client/lib/ika-jvectormap/jquery-jvectormap-us-mill-en.js', 'client')
	// api.addFiles('client/lib/ika-jvectormap/jquery-jvectormap-world-mill-en.js', 'client')
	api.addFiles('client/lib/jqcloud2/dist/jqcloud.css', 'client')
	api.addFiles('client/lib/jqcloud2/dist/jqcloud.js', 'client');
	api.addFiles('client/lib/jqgrid/css/ui.jqgrid.css', 'client');
	api.addFiles('client/lib/jqgrid/js/jquery.jqGrid.js', 'client');
	// api.addFiles('client/lib/jqgrid/js/i18n/grid.locale-en.js', 'client')
	api.addFiles('client/lib/jquery-classyloader/js/jquery.classyloader.min.js', 'client');
	api.addFiles('client/lib/jquery-easing/js/jquery.easing.js', 'client');
	api.addFiles('client/lib/jquery-easy-pie-chart/dist/jquery.easypiechart.js', 'client');
	api.addFiles('client/lib/jQuery-gMap/jquery.gmap.min.js', 'client');
	api.addFiles('client/lib/jquery-inputmask/dist/jquery.inputmask.bundle.js', 'client');
	api.addFiles('client/lib/jquery-knob/js/jquery.knob.js', 'client');
	api.addFiles('client/lib/jquery-localize-i18n/dist/jquery.localize.js', 'client');
	api.addFiles('client/lib/jquery-steps/build/jquery.steps.js', 'client');
	api.addFiles('client/lib/jQuery-Storage-API/jquery.storageapi.js', 'client');
	api.addFiles('client/lib/jquery-validation/dist/jquery.validate.js', 'client');
	api.addFiles('client/lib/jqueryui-touch-punch/jquery.ui.touch-punch.min.js', 'client');
	// api.addFiles('client/lib/loaders/loaders.css', 'client')
	// api.addFiles('client/lib/matchMedia/matchMedia.js', 'client')
	// api.addFiles('client/lib/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css', 'client')
	// api.addAssets('client/lib/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha-horizontal.png', 'client')
	// api.addAssets('client/lib/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha.png', 'client')
	// api.addAssets('client/lib/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue-horizontal.png', 'client')
	// api.addAssets('client/lib/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue.png', 'client')
	// api.addAssets('client/lib/mjolnic-bootstrap-colorpicker/dist/img/bootstrap-colorpicker/saturation.png', 'client')
	// api.addFiles('client/lib/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js', 'client')
	// api.addFiles('client/lib/modernizr/modernizr.custom.js', 'client')
	// api.addFiles('client/lib/morris-js.js/morris.css', 'client')
	// api.addFiles('client/lib/morris-js.js/morris.js', 'client')
	// api.addFiles('client/lib/nestable/jquery.nestable.js', 'client')
	// api.addFiles('client/lib/parsleyjs/dist/parsley.min.js', 'client')
	// api.addFiles('client/lib/raphael/raphael.js', 'client')
	// api.addFiles('client/lib/rickshaw/rickshaw.js', 'client')
	// api.addFiles('client/lib/rickshaw/rickshaw.min.css', 'client')
	// api.addFiles('client/lib/screenfull/dist/screenfull.js', 'client')
	// api.addFiles('client/lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js', 'client')
	// api.addFiles('client/lib/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css', 'client')
	// api.addFiles('client/lib/select2/dist/css/select2.css', 'client')
	// api.addFiles('client/lib/select2/dist/js/select2.js', 'client')
	// api.addFiles('client/lib/select2-bootstrap-theme/dist/select2-bootstrap.css', 'client')
	// api.addFiles('client/lib/simple-line-icons/css/simple-line-icons.css', 'client')
	// api.addAssets('client/lib/simple-line-icons/fonts/Simple-Line-Icons.eot', 'client')
	// api.addAssets('client/lib/simple-line-icons/fonts/Simple-Line-Icons.svg', 'client')
	// api.addAssets('client/lib/simple-line-icons/fonts/Simple-Line-Icons.ttf', 'client')
	// api.addAssets('client/lib/simple-line-icons/fonts/Simple-Line-Icons.woff', 'client')
	// api.addAssets('client/lib/simple-line-icons/fonts/Simple-Line-Icons.woff2', 'client')
	// api.addFiles('client/lib/skycons/skycons.js', 'client')
	// api.addFiles('client/lib/slimScroll/jquery.slimscroll.min.js', 'client')
	// api.addFiles('client/lib/sparkline/index.js', 'client')
	// api.addFiles('client/lib/spinkit/css/spinkit.css', 'client')
	// api.addFiles('client/lib/sweetalert/dist/sweetalert.css', 'client')
	// api.addFiles('client/lib/sweetalert/dist/sweetalert.min.js', 'client')
	// api.addFiles('client/lib/weather-icons/css/weather-icons-wind.min.css', 'client')
	// api.addFiles('client/lib/weather-icons/css/weather-icons.min.css', 'client')
	// api.addAssets('client/lib/weather-icons/font/weathericons-regular-webfont.eot', 'client')
	// api.addAssets('client/lib/weather-icons/font/weathericons-regular-webfont.svg', 'client')
	// api.addAssets('client/lib/weather-icons/font/weathericons-regular-webfont.ttf', 'client')
	// api.addAssets('client/lib/weather-icons/font/weathericons-regular-webfont.woff', 'client')
	// api.addAssets('client/lib/weather-icons/font/weathericons-regular-webfont.woff2', 'client')
	// api.addFiles('client/lib/whirl/dist/whirl.css', 'client')
	api.addFiles('client/lib/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css', 'client');
	api.addAssets('client/lib/x-editable/dist/bootstrap3-editable/img/clear.png', 'client');
	api.addAssets('client/lib/x-editable/dist/bootstrap3-editable/img/loading.gif', 'client');
	api.addFiles('client/lib/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js', 'client');
	api.addFiles('client/lib/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min.js', 'client');
	api.addFiles('client/scripts/clear-storage.js', 'client');
	// api.addFiles('client/scripts/constants.js', 'client')
	api.addFiles('client/scripts/fullscreen.js', 'client');
	api.addFiles('client/scripts/load-css.js', 'client');
	// api.addFiles('client/scripts/maps-google.js', 'client')
	// api.addFiles('client/scripts/maps-vector.init.js', 'client')
	// api.addFiles('client/scripts/maps-vector.js', 'client')
	// api.addFiles('client/scripts/notify.js', 'client')
	// api.addFiles('client/scripts/panel-tools.js', 'client')
	// api.addFiles('client/scripts/skycons.js', 'client')
	// api.addFiles('client/scripts/slimscroll.js', 'client')
	// api.addFiles('client/scripts/sparkline.js', 'client')
	// api.addFiles('client/scripts/toggle-state.js', 'client')
	// api.addFiles('client/scripts/trigger-resize.js', 'client')
	// api.addFiles('client/scripts/utils.js', 'client')
	// api.addFiles('client/scripts/md5.min.js', 'client')
	api.addFiles('client/stylesheets/01_bootstrap.less', 'client');
	api.addFiles('client/stylesheets/02_app.less', 'client');
	api.addFiles('client/stylesheets/app/alerts.import.less', 'client');
	api.addFiles('client/stylesheets/app/animate.import.less', 'client');
	api.addFiles('client/stylesheets/app/bootstrap-reset.import.less', 'client');
	api.addFiles('client/stylesheets/app/breadcrumbs.import.less', 'client');
	api.addFiles('client/stylesheets/app/button-extra.import.less', 'client');
	api.addFiles('client/stylesheets/app/calendar.import.less', 'client');
	api.addFiles('client/stylesheets/app/chart-easypie.import.less', 'client');
	api.addFiles('client/stylesheets/app/chart-flot.import.less', 'client');
	api.addFiles('client/stylesheets/app/circles.import.less', 'client');
	api.addFiles('client/stylesheets/app/datatable.import.less', 'client');
	api.addFiles('client/stylesheets/app/docs.import.less', 'client');
	api.addFiles('client/stylesheets/app/dropdown-extra.import.less', 'client');
	api.addFiles('client/stylesheets/app/font-awesome.import.less', 'client');
	api.addFiles('client/stylesheets/app/form-elements.import.less', 'client');
	api.addFiles('client/stylesheets/app/form-imgcrop.import.less', 'client');
	api.addFiles('client/stylesheets/app/form-tags.import.less', 'client');
	api.addFiles('client/stylesheets/app/form-validation.import.less', 'client');
	api.addFiles('client/stylesheets/app/form-wizard.import.less', 'client');
	api.addFiles('client/stylesheets/app/gmap.import.less', 'client');
	api.addFiles('client/stylesheets/app/half-float.import.less', 'client');
	api.addFiles('client/stylesheets/app/jqgrid.import.less', 'client');
	api.addFiles('client/stylesheets/app/layout-animation.import.less', 'client');
	api.addFiles('client/stylesheets/app/layout-extra.import.less', 'client');
	api.addFiles('client/stylesheets/app/layout.import.less', 'client');
	api.addFiles('client/stylesheets/app/mailbox.import.less', 'client');
	api.addFiles('client/stylesheets/app/masonry-grid.import.less', 'client');
	api.addFiles('client/stylesheets/app/media-queries.import.less', 'client');
	api.addFiles('client/stylesheets/app/nestable.import.less', 'client');
	api.addFiles('client/stylesheets/app/notify.import.less', 'client');
	api.addFiles('client/stylesheets/app/offsidebar.import.less', 'client');
	api.addFiles('client/stylesheets/app/panels.import.less', 'client');
	api.addFiles('client/stylesheets/app/placeholder.import.less', 'client');
	api.addFiles('client/stylesheets/app/plugins.import.less', 'client');
	api.addFiles('client/stylesheets/app/portlets.import.less', 'client');
	api.addFiles('client/stylesheets/app/print.import.less', 'client');
	api.addFiles('client/stylesheets/app/progress-extra.import.less', 'client');
	api.addFiles('client/stylesheets/app/radial-bar.import.less', 'client');
	api.addFiles('client/stylesheets/app/row-extra.import.less', 'client');
	api.addFiles('client/stylesheets/app/settings.import.less', 'client');
	api.addFiles('client/stylesheets/app/sidebar.import.less', 'client');
	api.addFiles('client/stylesheets/app/slim-scroll.import.less', 'client');
	api.addFiles('client/stylesheets/app/spinner.import.less', 'client');
	api.addFiles('client/stylesheets/app/table-extras.import.less', 'client');
	api.addFiles('client/stylesheets/app/table-grid.import.less', 'client');
	api.addFiles('client/stylesheets/app/timeline.import.less', 'client');
	api.addFiles('client/stylesheets/app/todo.import.less', 'client');
	api.addFiles('client/stylesheets/app/top-navbar.import.less', 'client');
	api.addFiles('client/stylesheets/app/typo.import.less', 'client');
	api.addFiles('client/stylesheets/app/user-block.import.less', 'client');
	api.addFiles('client/stylesheets/app/utils.import.less', 'client');
	api.addFiles('client/stylesheets/app/vector-map.import.less', 'client');
	api.addFiles('client/stylesheets/app/widget.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/alerts.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/badges.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/bootstrap.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/breadcrumbs.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/button-groups.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/buttons.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/carousel.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/close.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/code.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/component-animations.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/dropdowns.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/forms.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/glyphicons.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/grid.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/input-groups.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/jumbotron.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/labels.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/list-group.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/media.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/modals.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/navbar.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/navs.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/normalize.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/pager.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/pagination.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/panels.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/popovers.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/print.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/progress-bars.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/responsive-embed.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/responsive-utilities.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/scaffolding.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/tables.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/theme.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/thumbnails.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/tooltip.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/type.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/utilities.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/variables.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/wells.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/alerts.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/background-variant.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/border-radius.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/buttons.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/center-block.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/clearfix.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/forms.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/gradients.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/grid-framework.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/grid.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/hide-text.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/image.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/labels.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/list-group.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/nav-divider.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/nav-vertical-align.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/opacity.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/pagination.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/panels.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/progress-bar.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/reset-filter.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/reset-text.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/resize.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/responsive-visibility.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/size.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/tab-focus.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/table-row.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/text-emphasis.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/text-overflow.import.less', 'client');
	api.addFiles('client/stylesheets/bootstrap/mixins/vendor-prefixes.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-a.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-b.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-c.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-d.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-e.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-f.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-g.import.less', 'client');
	api.addFiles('client/stylesheets/themes/theme-h.import.less', 'client');
	api.addAssets('public/fonts/fontawesome-webfont.eot', 'client');
	api.addAssets('public/fonts/fontawesome-webfont.svg', 'client');
	api.addAssets('public/fonts/fontawesome-webfont.ttf', 'client');
	api.addAssets('public/fonts/fontawesome-webfont.woff', 'client');
	api.addAssets('public/fonts/fontawesome-webfont.woff2', 'client');
	api.addAssets('public/fonts/FontAwesome.otf', 'client');
	api.addAssets('public/fonts/Simple-Line-Icons.eot', 'client');
	api.addAssets('public/fonts/Simple-Line-Icons.svg', 'client');
	api.addAssets('public/fonts/Simple-Line-Icons.ttf', 'client');
	api.addAssets('public/fonts/Simple-Line-Icons.woff', 'client');
	api.addAssets('public/fonts/Simple-Line-Icons.woff2', 'client');
	api.addAssets('public/fonts/weathericons-regular-webfont.eot', 'client');
	api.addAssets('public/fonts/weathericons-regular-webfont.svg', 'client');
	api.addAssets('public/fonts/weathericons-regular-webfont.ttf', 'client');
	api.addAssets('public/fonts/weathericons-regular-webfont.woff', 'client');
	api.addAssets('public/fonts/weathericons-regular-webfont.woff2', 'client');
	api.addAssets('public/img/bootstrap-colorpicker/alpha-horizontal.png', 'client');
	api.addAssets('public/img/bootstrap-colorpicker/alpha.png', 'client');
	api.addAssets('public/img/bootstrap-colorpicker/hue-horizontal.png', 'client');
	api.addAssets('public/img/bootstrap-colorpicker/hue.png', 'client');
	api.addAssets('public/img/bootstrap-colorpicker/saturation.png', 'client');

    //api.use('ecmascript@0.1.6');

    api.export('RpsComtPackages');
});

Package.onTest(function (api) {
    api.use('rps:comt-packages');
    api.use('ecmascript');
    api.use('tinytest@1.0.0');
    api.addFiles('test/rps-comt-packages.js', 'server');
});
