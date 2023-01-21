$count = 0
$category = "web-design"
$source = "https://source.unsplash.com/random/280%C3%280/?$category"
$source = "https://source.unsplash.com/random/280%C3%280/?web-design"
$destination = "C:\Users\Elias\Desktop\temp\sprint4-fiverr\frontend\src\assets\img\demogig\downloaded\$count.png"
# https://source.unsplash.com/random/280x280/?web-design
# C:\Users\Elias\Desktop\temp\sprint4-fiverr\frontend\src\assets\img\demogig

# Invoke-WebRequest -Uri $source -OutFile $destination
$wc = New-Object System.Net.WebClient
$wc.DownloadFile($source, $destination)
