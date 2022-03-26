<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

trait Timestampable
{
    #[ORM\Column(type: 'datetime_immutable', options: ['default' => 'CURRENT_TIMESTAMP'])]
    #[Groups(['user_read', 'user_details_read', 'article_read', 'article_details_read'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime', options: ['default' => 'CURRENT_TIMESTAMP'])]
    #[Groups(['user_read', 'user_details_read', 'article_read', 'article_details_read'])]
    private $updatedAt;

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Avant la creation on appelle persist et avant la modification update
     */
    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function updateTimestamps()
    {
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTimeImmutable);
        }
        $this->setUpdatedAt(new \DateTimeImmutable);
    }
}
