<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\Traits\ResourceId;
use App\Entity\Traits\Timestampable;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: "users")]
#[ApiResource(
    collectionOperations: [
        'get' => [
            'normalization_context' => ['groups' => 'user_read']
        ],
        'post'
    ],
    itemOperations: [
        'get' => [
            'normalization_context' => ['groups' => 'user_details_read']
        ],
        'put',
        'patch',
        'delete'
    ]
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    use ResourceId;
    use Timestampable;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Groups(['user_read', 'user_details_read', 'article_details_read'])]
    private $email;

    #[ORM\Column(type: 'json', options: ["default" => '["ROLE_USER]'])]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\Column(type: 'string', length: 150, nullable: true)]
    #[Groups(['user_read', 'user_details_read', 'article_details_read'])]
    private $firstname;

    #[ORM\Column(type: 'string', length: 150, nullable: true)]
    #[Groups(['user_read', 'user_details_read', 'article_details_read'])]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['user_details_read'])]
    private $city;

    #[ORM\Column(type: 'string', options: ["default" => "Privé"])]
    private $status = "Privé";

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['user_details_read'])]
    private $signature_dish;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['user_details_read'])]
    private $bio;

    #[ORM\Column(type: 'smallint', options: ["default" => 0])]
    #[Groups(['user_details_read'])]
    private $counter_like = 0;

    #[ORM\Column(type: 'integer', options: ["default" => 0])]
    #[Groups(['user_details_read'])]
    private $counter_follower = 0;

    #[ORM\Column(type: 'integer', options: ["default" => 0])]
    #[Groups(['user_details_read'])]
    private $counter_subscriber = 0;

    #[ORM\OneToMany(mappedBy: 'author', targetEntity: Article::class)]
    #[Groups(['user_details_read'])]
    private $articles;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $username;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->username = $email;
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function getUsername(): ?string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getSignatureDish(): ?string
    {
        return $this->signature_dish;
    }

    public function setSignatureDish(?string $signature_dish): self
    {
        $this->signature_dish = $signature_dish;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }

    public function getCounterLike(): int
    {
        return $this->counter_like;
    }

    public function setCounterLike(int $counter_like): self
    {
        $this->counter_like = $counter_like;

        return $this;
    }

    public function getCounterFollower(): int
    {
        return $this->counter_follower;
    }

    public function setCounterFollower(int $counter_follower): self
    {
        $this->counter_follower = $counter_follower;

        return $this;
    }

    public function getCounterSubscriber(): int
    {
        return $this->counter_subscriber;
    }

    public function setCounterSubscriber(int $counter_subscriber): self
    {
        $this->counter_subscriber = $counter_subscriber;

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->setAuthor($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->articles->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getAuthor() === $this) {
                $article->setAuthor(null);
            }
        }

        return $this;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }
}
