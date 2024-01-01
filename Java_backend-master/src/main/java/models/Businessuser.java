package models;

import jakarta.persistence.*;

@Entity
public class Businessuser {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @jakarta.persistence.Column(name = "idBusinessUser")
    private int idBusinessUser;

    public int getIdBusinessUser() {
        return idBusinessUser;
    }

    public void setIdBusinessUser(int idBusinessUser) {
        this.idBusinessUser = idBusinessUser;
    }

    @Basic
    @Column(name = "idCategorie")
    private int idCategorie;

    public int getIdCategorie() {
        return idCategorie;
    }

    public void setIdCategorie(int idCategorie) {
        this.idCategorie = idCategorie;
    }

    @Basic
    @Column(name = "username")
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "email")
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "password")
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "businessName")
    private String businessName;

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    @Basic
    @Column(name = "url_insta")
    private String urlInsta;

    public String getUrlInsta() {
        return urlInsta;
    }

    public void setUrlInsta(String urlInsta) {
        this.urlInsta = urlInsta;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Businessuser that = (Businessuser) o;

        if (idBusinessUser != that.idBusinessUser) return false;
        if (idCategorie != that.idCategorie) return false;
        if (username != null ? !username.equals(that.username) : that.username != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;
        if (businessName != null ? !businessName.equals(that.businessName) : that.businessName != null) return false;
        if (urlInsta != null ? !urlInsta.equals(that.urlInsta) : that.urlInsta != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idBusinessUser;
        result = 31 * result + idCategorie;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (businessName != null ? businessName.hashCode() : 0);
        result = 31 * result + (urlInsta != null ? urlInsta.hashCode() : 0);
        return result;
    }
}
