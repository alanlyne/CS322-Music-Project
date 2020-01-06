FROM python:3
WORKDIR /usr/src/app/backend
#ENV FLASK_APP app_launch.py
#ENV FLASK_RUN_HOST 0.0.0.0
#RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt ./
RUN pip install --no-cache -r requirements.txt
COPY . .
#RUN pip install --no-cache -r requirements.txt

CMD ["python", "app_launch.py"]