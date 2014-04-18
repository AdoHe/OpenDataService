/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    
    // Project select event
    'use strict';
    $('#project').change(function () {
        
        var checkValue = $('#project').val();
        
        if (checkValue === 'new_project') {
            // Open the new project dialog
            $('#project_modal').modal('toggle');
        }
    });
    
    $('#new-project').click(function () {
        var name = $('#project_name').val(),
            prefix = $('#project_prefix').val(),
            owner = $('#project_owner').val(),
            checkIndex = $('#project_env').get(0).selectedIndex;
        
        if (name === '') {
            $('#project_name').focus();
        }
        if (prefix === '') {
            $('#project_prefix').focus();
        }
        if (owner === '') {
            $('#project_owner').focus();
        }
        if (checkIndex === 0) {
            $('#project_env').focus();
        }
        
        $.ajax('/project', {
            data: {
            },
            
        });
    });
});