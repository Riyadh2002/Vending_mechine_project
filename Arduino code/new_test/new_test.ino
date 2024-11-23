#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>

const char* ssid = "EEEian";
const char* password = "pagol1234";

AsyncWebServer server(80);

// Define the pins for Motor 1
int motor1Pin1 = 14; // IN1 for Motor 1
int motor1Pin2 = 27; // IN2 for Motor 1
int enablePin1 = 12; // ENA for Motor 1

// Define the pins for Motor 2
int motor2Pin1 = 26; // IN1 for Motor 2
int motor2Pin2 = 25; // IN2 for Motor 2
int enablePin2 = 13; // ENB for Motor 2

void handleBody(AsyncWebServerRequest *request, uint8_t *data, size_t len, size_t index, size_t total) {
    StaticJsonDocument<200> jsonDoc;
    DeserializationError error = deserializeJson(jsonDoc, data, len);

    if (!error) {
        String name = jsonDoc["name"].as<String>();
        int quantity = jsonDoc["quantity"].as<int>();
        int id = jsonDoc["id"].as<int>();

        Serial.println("Received JSON data:");
        Serial.println("Name: " + name);
        Serial.println("Quantity: " + String(quantity));
        Serial.println("ID: " + String(id));

        if (id == 1) {
            // Motor 1 rotation based on quantity
            analogWrite(enablePin1, 128); // Set speed to slow (50% duty cycle)
            for (int q = 0; q < quantity; q++) {
                digitalWrite(motor1Pin1, HIGH);
                digitalWrite(motor1Pin2, LOW);
                
                delay(1000); // Adjust for one 360-degree rotation based on your motor's speed
                
                // Stop Motor 1 after each rotation
                digitalWrite(motor1Pin1, LOW);
                digitalWrite(motor1Pin2, LOW);
                delay(500); // Small delay before next rotation
            }
            digitalWrite(enablePin1, LOW); // Turn off Motor 1
        } else if (id == 2) {
            // Motor 2 rotation based on quantity
            analogWrite(enablePin2, 128); // Set speed to slow (50% duty cycle)
for (int q = 0; q < quantity; q++) {
    // Reverse the motor by setting motor2Pin1 LOW and motor2Pin2 HIGH
    digitalWrite(motor2Pin1, LOW);
    digitalWrite(motor2Pin2, HIGH);
    
    delay(1000); // Adjust for one 360-degree rotation based on your motor's speed
    
    // Stop Motor 2 after each rotation
    digitalWrite(motor2Pin1, LOW);
    digitalWrite(motor2Pin2, LOW);
    delay(500); // Small delay before next rotation
}
digitalWrite(enablePin2, LOW); // Turn off Motor 2

        }

        AsyncWebServerResponse *response = request->beginResponse(200, "application/json", "{\"status\":\"Data received\"}");
        response->addHeader("Access-Control-Allow-Origin", "*");
        request->send(response);
    } else {
        AsyncWebServerResponse *response = request->beginResponse(400, "application/json", "{\"error\":\"Invalid JSON\"}");
        response->addHeader("Access-Control-Allow-Origin", "*");
        request->send(response);
    }
}

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
    Serial.println("IP Address: " + WiFi.localIP().toString());

    // Set motor pins as outputs
    pinMode(motor1Pin1, OUTPUT);
    pinMode(motor1Pin2, OUTPUT);
    pinMode(enablePin1, OUTPUT);
    
    pinMode(motor2Pin1, OUTPUT);
    pinMode(motor2Pin2, OUTPUT);
    pinMode(enablePin2, OUTPUT);

    // Initialize motor pins to LOW to keep motors off initially
    digitalWrite(motor1Pin1, LOW);
    digitalWrite(motor1Pin2, LOW);
    digitalWrite(enablePin1, LOW);
    
    digitalWrite(motor2Pin1, LOW);
    digitalWrite(motor2Pin2, LOW);
    digitalWrite(enablePin2, LOW);

    // Handle preflight OPTIONS requests for CORS
    server.on("/data", HTTP_OPTIONS, [](AsyncWebServerRequest *request) {
        AsyncWebServerResponse *response = request->beginResponse(200);
        response->addHeader("Access-Control-Allow-Origin", "*");
        response->addHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response->addHeader("Access-Control-Allow-Headers", "Content-Type");
        request->send(response);
    });

    // Route to handle POST requests with JSON data
    server.on(
        "/data",
        HTTP_POST,
        [](AsyncWebServerRequest *request) {
            // This lambda runs when the POST request begins
        },
        NULL,
        handleBody // Separate function for handling the body
    );

    // Set a default CORS header for all routes
    DefaultHeaders::Instance().addHeader("Access-Control-Allow-Origin", "*");

    server.begin();
}

void loop() {
    // Any additional loop code
}
