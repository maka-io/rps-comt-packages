Package.describe({
    name: "rps:standard-plugins",
    summary: "This is a simple wrapper for all the plug-ins that are use by RPS.",
    version: "0.0.86",
    git: "https://github.com/<username>/rps-standard-plugins.git",
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.0');

    var packages = [
        'iron:router@1.0.12',
        'minimongo',
        'mongo-livedata',
        'templating',
        'momentjs:moment@2.11.2',
        'jquery',
        'less@2.5.1',
        'reactive-dict@1.1.3',
        'reactive-var@1.0.6',
        'reload@1.1.4',
        'zimme:iron-router-active@2.0.1',
        'twbs:bootstrap@3.3.6',
        'okgrow:router-autoscroll@0.1.7',
        'logging@1.0.8',
        'fortawesome:fontawesome@4.5.0',
        'ejson@1.0.7',
        'random@1.0.5',
        'aldeed:autoform-bs-datepicker@1.1.1',
        'aldeed:collection2@2.9.0',
        'accounts-password@1.1.4',
        'ian:accounts-ui-bootstrap-3@1.1.4',
        'alanning:roles@1.2.14',
        'cfs:standard-packages@0.5.9',
        'cfs:gridfs@0.0.33',
        'rps:autoform-file@0.4.21',
        'sacha:spin@2.3.1',
        'check@1.1.0'

    ];

    api.use(packages);
    api.imply(packages);

    api.addFiles('lib/rps-standard-plugins.js', ['client', 'server']);
    api.addFiles('client/rps-standard-plugins.js', 'client');
    api.addFiles('server/rps-standard-plugins.js', 'server');

    /*
     *
     * Begin plug-ins
     */
    // bootstrap fonts
    api.addFiles('client/lib/awesome-bootstrap-checkbox-master/awesome-bootstrap-checkbox.css', 'client');
    // blueimp
    api.addFiles('client/lib/blueimp/blueimp-gallery-indicator.css', 'client');
    api.addFiles('client/lib/blueimp/blueimp-gallery-video.css', 'client');
    api.addFiles('client/lib/blueimp/blueimp-gallery.min.css', 'client');
    api.addFiles('client/lib/blueimp/jquery.blueimp-gallery.min.js', 'client');
    // bootstrap markdown
    api.addFiles('client/lib/bootstrap-markdown/bootstrap-markdown.min.css', 'client');
    api.addFiles('client/lib/bootstrap-markdown/bootstrap-markdown.js', 'client');
    api.addFiles('client/lib/bootstrap-markdown/markdown.js', 'client');
    // bootstrap tour
    api.addFiles('client/lib/bootstrapTour/bootstrap-tour.min.css', 'client');
    api.addFiles('client/lib/bootstrapTour/bootstrap-tour.min.js', 'client');
    // c3
    api.addFiles('client/lib/c3/c3.min.css', 'client');
    api.addFiles('client/lib/c3/c3.min.js', 'client');
    // chartist
    api.addFiles('client/lib/chartist/chartist.min.css', 'client');
    api.addFiles('client/lib/chartist/chartist.min.js', 'client')
    api.addAssets('client/lib/chartist/chartist.min.js.map', 'client')
    // chartJs
    api.addFiles('client/lib/chartJs/Chart.min.js', 'client')
    // chosen
    api.addFiles('client/lib/chosen/chosen.css', 'client');
    api.addFiles('client/lib/chosen/chosen.jquery.js', 'client');
    // clipboard
    api.addFiles('client/lib/clipboard/clipboard.min.js', 'client');
    // clockpicker
    api.addFiles('client/lib/clockpicker/clockpicker.css', 'client');
    api.addFiles('client/lib/clockpicker/clockpicker.js', 'client');
    // codemirror
    //api.addFiles('client/lib/codemirror/ambiance.css', 'client');
    //api.addFiles('client/lib/codemirror/style/codemirror.css', 'client');
    //api.addFiles('client/lib/codemirror/javascript.js', 'client');
    //api.addFiles('client/lib/codemirror/script/codemirror.js', 'client');
    // bootstrap color picker
    api.addFiles('client/lib/colorpicker/bootstrap-colorpicker.min.css', 'client');
    api.addFiles('client/lib/colorpicker/bootstrap-colorpicker.min.js', 'client');
    //*/
    // cropper
    api.addFiles('client/lib/cropper/cropper.min.css', 'client');
    api.addFiles('client/lib/cropper/cropper.min.js', 'client');
    // d3
    api.addFiles('client/lib/d3/d3.min.js', 'client');
    // datepicker
    api.addFiles('client/lib/datapicker/bootstrap-datepicker.js', 'client');
    api.addFiles('client/lib/datapicker/datepicker3.css', 'client');
    // data tabled
    api.addFiles('client/lib/dataTables/datatables.min.css', 'client');
    api.addFiles('client/lib/dataTables/datatables.min.js', 'client');
    // date range picker
    api.addFiles('client/lib/daterangepicker/daterangepicker-bs3.css', 'client');
    api.addFiles('client/lib/daterangepicker/daterangepicker.js', 'client');
    // diff_match_patch
    api.addFiles('client/lib/diff_match_patch/javascript/diff_match_patch.js', 'client');
    // dotdotdot
    api.addFiles('client/lib/dotdotdot/jquery.dotdotdot.min.js', 'client');
    // flot
    api.addFiles('client/lib/flot/excanvas.min.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.pie.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.resize.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.spline.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.symbol.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.time.js', 'client');
    api.addFiles('client/lib/flot/jquery.flot.tooltip.min.js', 'client');
    // footable
    api.addFiles('client/lib/footable/footable.core.css', 'client');
    api.addFiles('client/lib/footable/footable.all.min.js', 'client');
    // full calendar
    api.addFiles('client/lib/fullcalendar/fullcalendar.css', 'client');
    api.addFiles('client/lib/fullcalendar/fullcalendar.min.js', 'client');
    // i18next
    api.addFiles('client/lib/i18next/i18next.min.js', 'client');
    // iCheck
    api.addFiles('client/lib/iCheck/custom.css', 'client');
    api.addFiles('client/lib/iCheck/icheck.min.js', 'client');
    api.addAssets('client/lib/iCheck/green.png', 'client');
    api.addAssets('client/lib/iCheck/green@2x.png', 'client');
    // idle-timer
    api.addFiles('client/lib/idle-timer/idle-timer.min.js', 'client');
    // ion range slider
    api.addFiles('client/lib/ionRangeSlider/ion.rangeSlider.css', 'client');
    api.addFiles('client/lib/ionRangeSlider/ion.rangeSlider.min.js', 'client');
    api.addFiles('client/lib/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'client');
    // jasny
    api.addFiles('client/lib/jasny/jasny-bootstrap.min.css', 'client');
    api.addFiles('client/lib/jasny/jasny-bootstrap.min.js', 'client');
    // jqgrid
    api.addFiles('client/lib/jqGrid/jquery.jqGrid.min.js', 'client');
    api.addFiles('client/lib/jqGrid/ui.jqgrid.css', 'client');
    api.addFiles('client/lib/jqGrid/i18n/grid.locale-en.js', 'client');
    // jquery ui
    api.addFiles('client/lib/jquery-ui/jquery-ui.min.css', 'client');
    api.addFiles('client/lib/jquery-ui/jquery-ui.min.js', 'client');
    // jsKnob
    api.addFiles('client/lib/jsKnob/jquery.knob.js', 'client');
    // jstree
    api.addFiles('client/lib/jsTree/jstree.min.js', 'client');
    api.addFiles('client/lib/jsTree/style.css', 'client');
    // jvectormap
    api.addFiles('client/lib/jvectormap/jquery-jvectormap-2.0.2.css', 'client');
    api.addFiles('client/lib/jvectormap/jquery-jvectormap-2.0.2.min.js', 'client');
    api.addFiles('client/lib/jvectormap/jquery-jvectormap-world-mill-en.js', 'client');
    // ladda
    api.addFiles('client/lib/ladda/ladda-themeless.min.css', 'client');
    api.addFiles('client/lib/ladda/ladda.jquery.min.js', 'client');
    api.addFiles('client/lib/ladda/laddajquery/ladda.min.js', 'client');
    api.addFiles('client/lib/ladda/laddajquery/spinner/spin.min.js', 'client');
    // masonry
    api.addFiles('client/lib/masonry/masonry.pkgd.min.js', 'client');
    // metisMenu
    api.addFiles('client/lib/metisMenu/jquery.metisMenu.js', 'client');
    // nouslider
    api.addFiles('client/lib/nouslider/jquery.nouislider.css', 'client');
    // pace
    //api.addFiles('client/lib/pace/pace.min.js', 'client');
    // peity
    api.addFiles('client/lib/peity/jquery.peity.min.js', 'client');
    // prettyTextDiff
    api.addFiles('client/lib/preetyTextDiff/jquery.pretty-text-diff.min.js', 'client');
    // rickshaw
    api.addFiles('client/lib/rickshaw/rickshaw.min.js', 'client');
    api.addFiles('client/lib/rickshaw/vendor/d3.v3.js', 'client');
    // select2
    api.addFiles('client/lib/select2/select2.min.css', 'client');
    api.addFiles('client/lib/select2/select2.full.min.js', 'client');
    // nestable
    api.addFiles('client/lib/nestable/jquery.nestable.js', 'client');
    // slick
    api.addFiles('client/lib/slick/slick.css', 'client');
    api.addFiles('client/lib/slick/slick.min.js', 'client');
    api.addFiles('client/lib/slick/slick-theme.css', 'client');
    // slimscroll
    api.addFiles('client/lib/slimscroll/jquery.slimscroll.min.js', 'client');
    // sparkline
    api.addFiles('client/lib/sparkline/jquery.sparkline.min.js', 'client');
    // jquery steps
    api.addFiles('client/lib/steps/jquery.steps.css', 'client');
    api.addFiles('client/lib/steps/jquery.steps.min.js', 'client');
    // summernote
    api.addFiles('client/lib/summernote/summernote-bs3.css', 'client');
    api.addFiles('client/lib/summernote/summernote.css', 'client');
    api.addFiles('client/lib/summernote/summernote.min.js', 'client');
    // sweet alert
    api.addFiles('client/lib/sweetalert/sweetalert.css', 'client');
    api.addFiles('client/lib/sweetalert/sweetalert.min.js', 'client');
    // switchery
    api.addFiles('client/lib/switchery/switchery.css', 'client');
    api.addFiles('client/lib/switchery/switchery.js', 'client');
    // tinycon
    api.addFiles('client/lib/tinycon/tinycon.min.js', 'client');
    //toastr
    api.addFiles('client/lib/toastr/toastr.min.js', 'client');
    api.addFiles('client/lib/toastr/toastr.min.css', 'client');
    // touchspin
    api.addFiles('client/lib/touchspin/jquery.bootstrap-touchspin.min.css', 'client');
    api.addFiles('client/lib/touchspin/jquery.bootstrap-touchspin.min.js', 'client');
    // validate
    api.addFiles('client/lib/validate/jquery.validate.min.js', 'client');

    // end plug-ins

    /*
     *
     * Begin styles
     */
    // root
    api.addFiles('client/stylesheets/style.less', 'client');
    api.addFiles('client/stylesheets/globals/badgets_labels.import.less', 'client');
    api.addFiles('client/stylesheets/globals/base.import.less', 'client');
    api.addFiles('client/stylesheets/globals/buttons.import.less', 'client');
    api.addFiles('client/stylesheets/globals/chat.import.less', 'client');
    api.addFiles('client/stylesheets/globals/custom.import.less', 'client');
    api.addFiles('client/stylesheets/globals/elements.import.less', 'client');
    api.addFiles('client/stylesheets/globals/landing.import.less', 'client');
    api.addFiles('client/stylesheets/globals/md-skin.import.less', 'client');
    api.addFiles('client/stylesheets/globals/media.import.less', 'client');
    api.addFiles('client/stylesheets/globals/metismenu.import.less', 'client');
    api.addFiles('client/stylesheets/globals/mixins.import.less', 'client');
    api.addFiles('client/stylesheets/globals/navigation.import.less', 'client');
    api.addFiles('client/stylesheets/globals/pages.import.less', 'client');
    api.addFiles('client/stylesheets/globals/rtl.import.less', 'client');
    api.addFiles('client/stylesheets/globals/sidebar.import.less', 'client');
    api.addFiles('client/stylesheets/globals/skins.import.less', 'client');
    api.addFiles('client/stylesheets/globals/spinners.import.less', 'client');
    api.addFiles('client/stylesheets/globals/theme-config.import.less', 'client');
    api.addFiles('client/stylesheets/globals/top_navigation.import.less', 'client');
    api.addFiles('client/stylesheets/globals/typography.import.less', 'client');
    api.addFiles('client/stylesheets/globals/variables.import.less', 'client');
    api.addFiles('client/stylesheets/animatecss/animate.css', 'client');
    // end styles

    /*
     *
     * Begin static files
     */
    api.addAssets('public/32px.png', 'client');
    api.addAssets('public/39px.png', 'client');
    api.addAssets('public/40px.png', 'client');

    api.addAssets('public/ajax-loader.gif', 'client');
    api.addAssets('public/throbber.gif', 'client');


    //api.use('ecmascript@0.1.6');

    api.export('RpsStandardPlugins');
});

Package.onTest(function (api) {
    api.use('rps:standard-plugins');
    api.use('ecmascript');
    api.use('tinytest@1.0.0');
    api.addFiles('test/rps-standard-plugins.js', 'server');
});
