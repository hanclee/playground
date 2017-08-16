# Use an official Python runtime as a parent image
FROM python:3.6.2-slim

# Set the working directory to /strands-api
WORKDIR /strands-api

# Copy the current directory contents into the container at /strands-api
ADD . /strands-api

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt
