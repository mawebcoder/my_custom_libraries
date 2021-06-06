<?php
class category
{
    public static function getcategory($parentId=0,$tablename)
    {
        $sql = "select * from ".$tablename." where parent=?";
        $result=self::doselect($sql,1,[$parentId]);
        foreach ($result as $key=>$row) {

            $children = self::getcategory($row['id']);
            if (@sizeof($children) > 0) {
                $row['children'] = $children;
            }
            @$data[] = $row;

        }

        return @$data;
    }
}
?>