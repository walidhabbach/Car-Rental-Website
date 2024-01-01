package models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Commentaire {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @jakarta.persistence.Column(name = "idCommentaire")
    private int idCommentaire;

    public int getIdCommentaire() {
        return idCommentaire;
    }

    public void setIdCommentaire(int idCommentaire) {
        this.idCommentaire = idCommentaire;
    }

    @Basic
    @Column(name = "idClient")
    private int idClient;

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    @Basic
    @Column(name = "idPost")
    private int idPost;

    public int getIdPost() {
        return idPost;
    }

    public void setIdPost(int idPost) {
        this.idPost = idPost;
    }

    @Basic
    @Column(name = "commentText")
    private String commentText;

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    @Basic
    @Column(name = "timestamp")
    private Timestamp timestamp;

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

        Commentaire that = (Commentaire) o;

        if (idCommentaire != that.idCommentaire) return false;
        if (idClient != that.idClient) return false;
        if (idPost != that.idPost) return false;
        if (commentText != null ? !commentText.equals(that.commentText) : that.commentText != null) return false;
        if (timestamp != null ? !timestamp.equals(that.timestamp) : that.timestamp != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idCommentaire;
        result = 31 * result + idClient;
        result = 31 * result + idPost;
        result = 31 * result + (commentText != null ? commentText.hashCode() : 0);
        result = 31 * result + (timestamp != null ? timestamp.hashCode() : 0);
        return result;
    }
}
