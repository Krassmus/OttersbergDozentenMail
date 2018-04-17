jQuery(function () {
    var form = jQuery(
        '<form id="dozentenmail_form" style="display: inline;" action="' + STUDIP.ABSOLUTE_URI_STUDIP + 'dispatch.php/messages/write?filter=send_sms_to_all&emailrequest=1&who=dozent" data-dialog method="post">' +
        '<input type="hidden" name="course_id">' +
        '<input type="hidden" name="default_subject">' +
        '<input type="hidden" name="default_body">' +
        '<button style="border: none; cursor: pointer; background: none;"><img class="icon-role-clickable" src="' + STUDIP.ASSETS_URL + 'images/icons/blue/add/mail.svg" width="16" height="16"></button>' +
        '</form>');
    jQuery("#layout_content > table.default > caption > .actions").append(form);
    jQuery("#dozentenmail_form input[name=default_subject]").val(jQuery("#dozentenmail_subject").text());
    jQuery("#dozentenmail_form input[name=default_body]").val(jQuery("#dozentenmail_body").text());
    jQuery("#dozentenmail_form input[name=course_id]").val(STUDIP.URLHelper.parameters.cid);
});