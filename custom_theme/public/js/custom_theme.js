/**
 * Created by loubna on 4/13/22.
 */
/* global jQuery, $ */


let arabic_font = frappe.db.get_single_value("Theme Settings", "arabic_font");
let english_font = frappe.db.get_single_value("Theme Settings", "english_font");

let logo_width_in_px = frappe.db.get_single_value("Theme Settings", "logo_width_in_px");
let logo_height_in_px = frappe.db.get_single_value("Theme Settings", "logo_height_in_px");
let inputs_background_color = frappe.db.get_single_value("Theme Settings", "inputs_background_color");



var main = function () {
    // set timeout for 1 second
    
    setTimeout(function () {

        if (frappe.user.name != "Administrator") {
            document.querySelector(".dropdown-help").children[0].hidden = 1
            let toggle_icon = document.querySelector(".sidebar-toggle-btn");
            let toggle_bar = document.querySelector(".layout-side-section");

            toggle_icon.hidden = true;
            toggle_bar.hidden = true;
        }
    }, 1000);

    var sidebar_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_text_color").then(function (v) {
            $('.desk-sidebar .standard-sidebar-item:not(.selected) .sidebar-item-label').css('color', v);
        });
    };

    var sidebar_active_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_active_page").then(function (v) {
            v ? document.documentElement.style.setProperty('--sidebar-selected-item-background-color', v) : '#0DBAC6';
        });
    };

    var sidebar_icon_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_icon_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--sidebar-icon-color', v) : '#2a59b1';
        });
    };

    var sidebar_hover_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_hover_text_color").then(function (v) {
            if (v) {
                document.documentElement.style.setProperty('--sidebar-item-label-color', v);
            } else {
                document.documentElement.style.setProperty('--sidebar-item-label-color', '#fff');
            }
        });
    };

    var sidebar_hover_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_hover_background_color").then(function (v) {
            if (v) {
                document.documentElement.style.setProperty('--sidebar-item-background-color', v);
            } else {
                document.documentElement.style.setProperty('--sidebar-item-background-color', '#0DBAC6');
            }
        });
    };

    var shortcuts_card_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "shortcuts_card_background_color").then(function (v) {
            setTimeout(function () {
                $('.desk-page .widget-group .shortcut-widget-box').css('background', v);
            }, 1000);
        });
    };

    var shortcuts_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "shortcuts_text_color").then(function (v) {
            setTimeout(function () {
                $('.desk-page .widget-group .shortcut-widget-box .widget-title').css('color', v);
            }, 1000);
        });
    };

    var boxes_title_color = function () {
        frappe.db.get_single_value("Theme Settings", "boxes_title_color").then(function (v) {
            setTimeout(function () {
                $('.desk-page .widget-group .widget-group-body .links-widget-box .widget-title span').css('color', v);
            }, 1000);
        });
    };

    var boxes_icon_color = function () {
        frappe.db.get_single_value("Theme Settings", "boxes_icon_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--box-icon-color', v) : '#0DBAC6';
        });
    };

    var boxes_items_hover_color = function () {
        frappe.db.get_single_value("Theme Settings", "boxes_items_hover_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--box-item-hover', v) : '#efefef';
        });
    };

    var boxes_items_color = function () {
        frappe.db.get_single_value("Theme Settings", "boxes_items_color").then(function (v) {
            setTimeout(function () {
                $('.widget.links-widget-box .link-item .link-content').css('color', v);
                document.documentElement.style.setProperty('--indicator-color', v);
            }, 1000);
        });
    };

    var navbar_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "navbar_background_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--navbar-bg', v) : '#fff';
        });
    };

    var sidebar_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_background_color").then(function (v) {
            $('[data-page-route=Workspaces] .layout-main .layout-side-section').css('background', v);
        });
    };

    var subnavbar_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "subnavbar_background_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--subnavbar-bg', v) : '#fff';
        });
    };

    var sidebar_scrollbar_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_scrollbar_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--scrollbar-bg', v) : '#d9d7d7';
        });
    };

    var sidebar_icon_hover_color = function () {
        frappe.db.get_single_value("Theme Settings", "sidebar_icon_hover_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--sidebar-icon-hover-color', v) : '#ffffff';
        });
    };

    var button_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "button_background_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--btn-bg-color', v) : '#001C71';
        });
    };

    var button_text_colors = function () {
        frappe.db.get_single_value("Theme Settings", "button_text_colors").then(function (v) {
            v ? document.documentElement.style.setProperty('--btn-text-color', v) : '#fff';
        });
    };

    var button_hover_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "button_hover_background_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--btn-hover-bg-color', v) : 'transparent';
        });
    };

    var button_hover_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "button_hover_text_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--btn-hover-text-color', v) : 'transparent';
        });
    };

    var text_color = function () {
        frappe.db.get_single_value("Theme Settings", "text_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--theme-text-color', v) : '#0C2677';
        });
    };

    var dropdown_item_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "dropdown_item_text_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--dropdown-item-text-color', v) : '#0C2677';
        });
    };

    var dropdown_item_hover_text_color = function () {
        frappe.db.get_single_value("Theme Settings", "dropdown_item_hover_text_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--dropdown-item-hover-color', v) : '#0C2677';
        });
    };

    var dropdown_item_hover_background_color = function () {
        frappe.db.get_single_value("Theme Settings", "dropdown_item_hover_background_color").then(function (v) {
            v ? document.documentElement.style.setProperty('--dropdown-item-hover-bg-color', v) : '#0C2677';
        });
    };


    return {
        init: function () {
            navbar_background_color();
            sidebar_active_color();
            sidebar_text_color();
            sidebar_icon_color();
            sidebar_background_color();
            sidebar_hover_background_color();
            sidebar_hover_text_color();
            shortcuts_card_background_color();
            shortcuts_text_color();
            boxes_title_color();
            boxes_icon_color();
            boxes_items_color();
            subnavbar_background_color();
            sidebar_scrollbar_color();
            sidebar_icon_hover_color();
            boxes_items_hover_color();
            button_background_color();
            button_text_colors();
            button_hover_background_color();
            button_hover_text_color();
            text_color();
            dropdown_item_text_color();
            dropdown_item_hover_text_color();
            dropdown_item_hover_background_color();
        }
    };
}();


$(document).ready(function () {
    main.init();
});