package models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Message {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idMessage")
    private int idMessage;
    @Basic
    @Column(name = "idBusinessUser")
    private int idBusinessUser;
    @Basic
    @Column(name = "idClient")
    private int idClient;
    @Basic
    @Column(name = "messageText")
    private String messageText;
    @Basic
    @Column(name = "timestamp")
    private Timestamp timestamp;

    public int getIdMessage() {
        return idMessage;
    }

    public void setIdMessage(int idMessage) {
        this.idMessage = idMessage;
    }

    public int getIdBusinessUser() {
        return idBusinessUser;
    }

    public void setIdBusinessUser(int idBusinessUser) {
        this.idBusinessUser = idBusinessUser;
    }

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Message message = (Message) o;

        if (idMessage != message.idMessage) return false;
        if (idBusinessUser != message.idBusinessUser) return false;
        if (idClient != message.idClient) return false;
        if (messageText != null ? !messageText.equals(message.messageText) : message.messageText != null) return false;
        if (timestamp != null ? !timestamp.equals(message.timestamp) : message.timestamp != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idMessage;
        result = 31 * result + idBusinessUser;
        result = 31 * result + idClient;
        result = 31 * result + (messageText != null ? messageText.hashCode() : 0);
        result = 31 * result + (timestamp != null ? timestamp.hashCode() : 0);
        return result;
    }
}
