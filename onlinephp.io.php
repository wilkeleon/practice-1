<?php

	// php 
	// 	arrays: indexded, associative 
	// js
	// 	arrays: indexed, objects
	
	//	by reference
	function add(&$x, $y) {
        $x = 10;
    }

    $x = 6;
    $y = 4;
    add($x, $y);
    echo $x;
	exit;

	$arr = [
				['name' => "Badr", "age" => 30],
				['name' => "Wilke", "age" => 25]
			];
		
	// echo json_encode($arr);
	
	
	$dataFromJS = str_replace('\&quot;', '"', "{\&quot;cars\&quot;:[{\&quot;model\&quot;:\&quot;BWM\&quot;,\&quot;color\&quot;:\&quot;black\&quot;},{\&quot;model\&quot;:\&quot;Mercedes\&quot;,\&quot;color\&quot;:\&quot;white\&quot;}]}");
	
	$arr2 = json_decode($dataFromJS, true);
	
	print_r($arr2['cars'][1]['model']);
	