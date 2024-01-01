package models;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Posts {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idPost")
    private int idPost;
    @Basic
    @Column(name = "idSousCategorie")
    private int idSousCategorie;
    @Basic
    @Column(name = "idBusinessUser")
    private int idBusinessUser;
    @Basic
    @Column(name = "caption")
    private String caption;
    @Basic
    @Column(name = "imageUrl")
    private String imageUrl;
    @Basic
    @Column(name = "timestamp")
    private Timestamp timestamp;

    public int getIdPost() {
        return idPost;
    }

    public void setIdPost(int idPost) {
        this.idPost = idPost;
    }

    public int getIdSousCategorie() {
        return idSousCategorie;
    }

    public void setIdSousCategorie(int idSousCategorie) {
        this.idSousCategorie = idSousCategorie;
    }

    public int getIdBusinessUser() {
        return idBusinessUser;
    }

    public void setIdBusinessUser(int idBusinessUser) {
        this.idBusinessUser = idBusinessUser;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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

        Posts posts = (Posts) o;

        if (idPost != posts.idPost) return false;
        if (idSousCategorie != posts.idSousCategorie) return false;
        if (idBusinessUser != posts.idBusinessUser) return false;
        if (caption != null ? !caption.equals(posts.caption) : posts.caption != null) return false;
        if (imageUrl != null ? !imageUrl.equals(posts.imageUrl) : posts.imageUrl != null) return false;
        if (timestamp != null ? !timestamp.equals(posts.timestamp) : posts.timestamp != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idPost;
        result = 31 * result + idSousCategorie;
        result = 31 * result + idBusinessUser;
        result = 31 * result + (caption != null ? caption.hashCode() : 0);
        result = 31 * result + (imageUrl != null ? imageUrl.hashCode() : 0);
        result = 31 * result + (timestamp != null ? timestamp.hashCode() : 0);
        return result;
    }
}
