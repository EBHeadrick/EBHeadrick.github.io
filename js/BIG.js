/**
 * Created by EB on 8/6/2014.
 */

// You need this code for each tab in the page

$(function() {

    function navSetup() {
        tabSetup(home);
    }

    function tabSetup(tabName){
        $(tabName+' a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }
} // end of function for the document ready