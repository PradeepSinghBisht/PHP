<?php
    $value = $_POST['value'];
    $result = $_POST['total'];
    $operator = $_POST['operator'];

    $result = ($result == "") ? $value : calculate($operator, $result, $value);
    echo $result;

    function calculate($operator, $result, $value) {
        if ($operator == '+' and $value != "") {
            $result = $result + $value;
        } else if ($operator == '-' and $value != "") {
            $result = $result - $value;
        } else if ($operator == '*' and $value != "") {
            $result = $result * $value;
        } else if ($operator == '/' and $value != "") {
            $result = $result / $value;
        }
        return $result;
    }
?>