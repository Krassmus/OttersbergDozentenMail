<?php

class OttersbergDozentenMail extends StudIPPlugin implements SystemPlugin
{

    public function __construct() {
        parent::__construct();
        if (strpos($_SERVER['REQUEST_URI'], 'dispatch.php/course/members') !== false) {
            PageLayout::addScript($this->getPluginURL() . "/assets/dozentenmail.js");

            ob_start();
            include(__DIR__."/views/subject.php");
            $content = ob_get_clean();
            PageLayout::addBodyElements(
                '<div id="dozentenmail_subject" style="display: none;">'.$content.'</div>'
            );

            ob_start();
            include(__DIR__."/views/body.php");
            $content = ob_get_clean();
            PageLayout::addBodyElements(
                '<div id="dozentenmail_body" style="display: none;">'.$content.'</div>'
            );
        }
    }
}