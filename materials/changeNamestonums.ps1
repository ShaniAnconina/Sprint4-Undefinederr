$count = 1
foreach ($file in $(Get-ChildItem)){ 
$newName = [string]$count + '.png'
rename-item $file.Name $newName
$count++
}