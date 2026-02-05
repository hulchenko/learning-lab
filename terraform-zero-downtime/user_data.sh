#!/bin/bash
yum -y update
yum -y install httpd


myip=`curl http://169.254.169.254/latest/meta-data/local-ipv4`

cat <<EOF > /var/www/html/index.html
<html>
<center>
<body bgcolor="black">
<h2><font color="white">Hello from Terraform!<font color="red"> v1.0</font></h2><br><p>
<font color="green">Server Private IP: $myip<br>
<font color="white"><b>v1.1</b>
</body>
</center>
</html>
EOF

sudo service httpd start
chkconfig httpd on