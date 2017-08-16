# Use an official Python runtime as a parent image
FROM python:3.6.2-slim

# Set the working directory to /strands-api
WORKDIR /strands-api

# Copy the current directory contents into the container at /strands-api
ADD . /strands-api

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME strands-api
# TODO: disable for prod!!!
ENV FLASK_DEBUG 1
ENV FLASK_APP strands-api.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]
