# setup
sudo apt-get install python3-pip python3-dev python-virtualenv
cd ~/dev/playground/tensorflow
virtualenv --system-site-packages -p python3 tutorial

cd tutorial
source ~/dev/playground/tensorflow/tutorial/bin/activate
pip3 install --upgrade tensorflow
python
---- (py shell) ----
# Python
import tensorflow as tf
hello = tf.constant('Hello, TensorFlow!')
sess = tf.Session()
print(sess.run(hello))
# should print 'Hello, TensorFlow!'
---- (py shell) ----

# setup ipython notebook
pip install jupyter
pip install tensorboard

# run env
cd ~/dev/playground/tensorflow/tutorial
source ~/dev/playground/tensorflow/tutorial/bin/activate
jupyter notebook

# notes
https://medium.com/@TalPerry/deep-learning-the-stock-market-df853d139e02
https://cloud.google.com/solutions/machine-learning-with-financial-time-series-data
